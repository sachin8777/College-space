require('dotenv').config();
const saltedMd5 = require("salted-md5");
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const path = require('path');
const Joi = require('joi');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local');
const flash = require('connect-flash');
const multer = require("multer");
const { storage } = require('./cloudinary');
const upload = multer({ storage });
const { initializeApp } = require('firebase/app');
const { getStorage , ref , uploadBytesResumable , getDownloadURL} = require("firebase/storage");
const admin = require("firebase-admin");
const serviceAccount = require("./college-website-a0a36-firebase-adminsdk-u5c8c-7304d888aa.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket : "gs://college-website-a0a36.appspot.com",
});




const expressError = require('./utils/expressError')
const club = require('./models/clubs')
const student = require('./models/students')
const alumni = require('./models/alumni');
const placement = require('./models/placement');
const exam = require('./models/exams');
const announcement = require('./models/announcement')
const User = require('./models/users');
const catchAsync = require('./utils/catchAsync')
const { userSchema } = require('./schemas')

const app = express();
 
app.locals.bucket = admin.storage().bucket();

app.engine("ejs",ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


const sessionConfig = {
  name: "tappu",
  secret: "thisShouldBeSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
  },
};

 const firebaseConfig = {
   apiKey: process.env.apiKey,
   authDomain: process.env.authDomain,
   projectId: process.env.projectId,
   storageBucket: process.env.storageBucket,
   messagingSenderId: process.env.messagingSenderId,
   appId: process.env.appId,
   measurementId: process.env.measurementId,
 };
  const firebaseApp = initializeApp(firebaseConfig);
  const storage_fb = getStorage();
 const upload_fb = multer({ storage: multer.memoryStorage() });  
 
 
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/collegeDb')

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

app.use(( req , res , next ) => {
  res.locals.currentUser = req.user;
  res.locals.originalUrl = req.originalUrl;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
})

const isValid = ( req , res , next) => {
     const { error } = userSchema.validate(req.body);
      if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new expressError(msg, 400);
  } else {
    next();
  }

}

const isLoggedIn = ( req , res , next) => {
  if(!req.isAuthenticated())
{
   req.flash('error','You need to login first')
   res.redirect('/login');
}
  next();
}


app.get("/clubs", async (req, res) => {
  const clubs = await club.find({});
  res.render("pages/clubs.ejs", {
    clubs: clubs,
  });
});

app.get("/clubs/:id", async (req, res) => {
   const { id } = req.params;
  const club_ = await club.findById(id);
  console.log(club_);
  res.render("pages/indClub.ejs", {
    club: club_,
    students: club_.studentCr,
    teachers: club_.teacherCr,
  });
});

app.get("/placement", async (req, res) => {
  const placements = await placement.find({});
  res.render("pages/placements",{placements : placements});
});

app.get("/exam", (req, res) => {
  res.render("pages/exams");
});

app.get("/exam/:id", async(req, res) => {
  const {id} = req.params;
  const exams = await exam.findOne({department:id})
  res.render("pages/examMaterial",{exams : exams });
  
});


app.get("/connect/:id", async (req, res) => {
   const { id } = req.params;
   const list = await student.findOne({dep: id});
   console.log(list);
   res.render("pages/connect.ejs",{ list:list});
});

app.get("/connect/:id/:semId", async (req, res) => {
   const { id , semId } = req.params;
   const list = await student.findOne({dep: id , sem : semId}).populate('students');
   console.log(list);
   res.render("pages/sem.ejs",{ list:list});
});

app.get('/alumni', async(req,res)=>{
   const alumnis = await alumni.find({});
   res.render('pages/alumni.ejs',{alumnis: alumnis})
})

app.get("/announcements",async (req, res) => {
  const announcements = await announcement.find({});
  res.render("pages/announcement.ejs", { announcements: announcements });
});


app.get('/about',(req,res) => {
res.render('pages/about.ejs')});

app.get('/contact',(req,res) => {
res.send('Contact us')});

app.get("/home", (req, res) => {
  res.render("pages/home.ejs");
  // console.log(req.user);
});

app.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});

app.get("/register", (req, res) => {
  res.render("users/register.ejs");
  
});

app.post("/register", upload.single('image') , isValid ,catchAsync(async (req, res) => {
       const { name , username , email , department , rollNo , semester , password } = req.body;
       const { path } = await req.file;
       const image = path;
    const user = await new User({
      name,
      username,
      email,
      department,
      rollNo,
      semester,
      image
  });

      
      const data = {name: name,email: email,_id : user._id}
        // ACTUAL CODE
        // const st = await student.findOne({
        //   department: department, 
        //   sem: semester,
        // })
        // st.students.push(user);
        // await st.save();

        const st = await student.findOne({
          department: department, 
          sem: semester,
        });
        
        if (!st) {
          // Handle the case when no student is found for the given department and semester
          console.log('No student found for the given department and semester.');
          // You might want to return or throw an error, or handle it according to your application's logic
        } else {
          // If a student is found, you can proceed with updating the student's information
          st.students.push(user);
          await st.save();
        }
        




        
    const registeredUser = await User.register(user ,password)
     req.login(registeredUser, (err) => {
       if (err) return next(err);
       req.flash("success", "Registered new User");
       res.redirect(`/profile/${registeredUser._id}`);
     });

}));

app.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

app.post("/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",

  }) , (req,res) => {
    req.flash("success", "Logged in successfully!!");
    res.redirect(`/profile/${req.user._id}`);


});

app.get("/profile/:id", isLoggedIn ,async(req,res) => {
  const user = await User.findById( req.params.id )
  res.render('pages/profile.ejs', { user : user})
})

app.get("/profile/:id/update", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("pages/update.ejs", { user: user });
});

app.post("/profile/:id/update", async(req,res) => {
   const { githubLink , linkedInLink  } = req.body;
   const { id } = req.params;
   const user = await User.findByIdAndUpdate(id, {
     githubLink: githubLink,
     linkedInLink: linkedInLink,
   });
   
   console.log(user);
   res.redirect(`/profile/${id}`)
})
app.post("/profile/:id/update_img", upload.array('image'), catchAsync(async(req,res) => {
   const { id } = req.params;
   console.log(req.files);
   const { path } = req.files[0];
   console.log("hey")
   const user = await User.findByIdAndUpdate(id, {
     image: path,
   });
   res.redirect(`/profile/${id}`)
}))

app.get("/logout", (req, res) => {
   req.logout(function ( err) {
     if(err) { res.send(err)}
    req.flash("success","Successfully, Logged Out!")
     res.redirect('/home');
  });
  
});

 app.get("/upload", ( req , res ) => {
    res.send("HI");
  })
 app.post("/profile/:id/updates", upload_fb.single('file'), async( req , res ) => {
    const { id } = req.params;
    const dateTime =  giveCurrentDateTime();
    const storageRef = ref(storage_fb,`files/${req.file.originalname +"   "+ dateTime}`);
    
    const metadata = {
        contentType: req.file.mimetype,
    }
  
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);

    const downloadURL = await getDownloadURL(snapshot.ref);
    const user = await User.findByIdAndUpdate(id,{$push:{'notes':{'name': req.file.originalname , 'downloadLink' : downloadURL}}});
    console.log("File successfully uploaded.");
    res.redirect(`/profile/${id}`);

  })

const giveCurrentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
};

app.all('*',( req , res , next ) => {
    next(new expressError('Page not found', 404));
})

app.use(( err , req , res , next ) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = 'Something went wrong';
    res.status(statusCode).render('error',{ error : err});
})

app.listen('3000',() => {
console.log('Listening on port 3000')})