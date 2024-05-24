const mongoose = require("mongoose");
const club = require("../models/clubs");

const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/collegeDb");

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

const data = [
  {
    title: "Dance Club",
    about:
      "Lorem  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    head: "Tarun Parmar",
    members: 10,
    image: "/images/dance.jpg",
    studentCr: [
      {
        studentCrImg: "/images/dcStudentCr1.jpg",
        name: "Tarun Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "tarunparmar752@gmail.com",
      },
      {
        studentCrImg: "/images/ecStudentCr2.jpg",
        name: "Varun Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "varunparmar752@gmail.com",
      },
    ],
    teacherCr: [
      {
        teacherCrImg: "/images/dcStudentCr1.jpg",
        name: "Dr.Pawan Java",
        department: "Computer Science & Engineering",
        email: "pawanjavasarka@gmail.com",
      },
      {
        teacherCrImg: "/images/dcStudentCr2.jpg",
        name: "Dr.Sood Java",
        department: "Computer Science & Engineering",
        email: "hehenjavasarkaghat@gmail.com",
      },
    ],
    clubDescription:
      " This dance club is to boost up the morale of students and to highlight the talent of dance and creativity. It provides opportunities to dance lovers to prove their talent and it is a good platform for them to have their artistic exploration. This club plays an important role in maintaining the positive environment in the university. By this Club, students get opportunities to represent DAV UNIVERSITY in various reputed organizations. Dance has occupied an important place in Indian culture throughout history. Dance is most commonly defined as a way of human expression through movement. People have seen dance as a performing art on stage, on screen and in the media. Dance can also be a form of physical fitness or a prime means of expressing cultural heritage and identity. Historically, dance was often performed in rituals, worship, social celebrations, and as a means of entertainment and self-expression. Nowadays, dance has become a part of traditional events and also an element of new innovative performing experiences. This essay on dance will help students to understand the importance of dance and its different forms.",
    clubLine: "Dance is the only way to run away without leaving home",
  },
  {
    title: "Dramatics Club",
    about:
      "Lorem  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    head: "Varun Parmar",
    members: 50,
    image: "/images/dramatic.jpg",
    studentCr: [
      {
        studentCrImg: "/images/dcStudentCr1.jpg",
        name: "Tarun Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "tarunparmar752@gmail.com",
      },
      {
        studentCrImg: "/images/ecStudentCr2.jpg",
        name: "Neha Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "nehaparmar752@gmail.com",
      },
    ],
    teacherCr: [
      {
        teacherCrImg: "/images/dcStudentCr1.jpg",
        name: "Dr.Pawan Java",
        department: "Computer Science & Engineering",
        email: "pawanjavasarka@gmail.com",
      },
      {
        teacherCrImg: "/images/dcStudentCr2.jpg",
        name: "Dr.Sood Java",
        department: "Computer Science & Engineering",
        email: "hehenjavasarkaghat@gmail.com",
      },
    ],
    clubDescription:
      "When I first had to prepare a presentation for a Theatre class, I was searching for something different. Something other than famous playwrights, effective plays, and popular stage management. I was searching for something related to the youth in a way that will be able to make a change, because that is my goal in life.While surfing on the internet, I found a quote that caught my attention: ‘There is no world without theatre’. What is this world for? Who builds it? Who is its future? And what makes this world a better place? I found the answer – the youth. Yes, the youth. Each one of us. Therefore, there is no youth without theatre. This is why I decided back then that my presentation would be about the importance of theatre in education. This is because I believe that education is the strongest weapon we can use to change the world.In order to create a better world, memorising physics formulas, maths equations, poems, and the organs of a human body is not enough. It is crucial to understand what our world is all about, and it is also essential to be self-confident and creative, have empathy and communication skills, collaborate with others, learn to concentrate, know how to solve problems, trust each other, be disciplined, have fun sometimes and relax at others, have a strong memory, be aware of social issues, and appreciate the arts. In order to do all this, one must follow a drama education that has a physical, emotional, and social impact on us.",
    clubLine: "Acting is behaving truthfully under imaginary circumstances.",
  },
  {
    title: "Music Club",
    about:
      "Lorem  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    head: "Ayush Nanyal",
    members: 30,
    image: "/images/music.jpg",
    studentCr: [
      {
        studentCrImg: "/images/mcStudentCr1.jpg",
        name: "Tarun Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "tarunparmar752@gmail.com",
      },
      {
        studentCrImg: "/images/mcStudentCr3.jpg",
        name: "Neha Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "nehaparmar752@gmail.com",
      },
    ],
    teacherCr: [
      {
        teacherCrImg: "/images/mcStudentCr1.jpg",
        name: "Dr.Pawan Java",
        department: "Computer Science & Engineering",
        email: "pawanjavasarka@gmail.com",
      },
      {
        teacherCrImg: "/images/mcStudentCr2.jpg",
        name: "Dr.Sood Java",
        department: "Computer Science & Engineering",
        email: "hehenjavasarkaghat@gmail.com",
      },
    ],
    clubDescription:
      " Music has a very important role in human life because everyone likes to listen to music. The person who listens to music with pleasure in his life knows the importance of music in the real-life world, if a person is interested in music, then that person is always happy in his life, and remains stress-free in every problem. Listening to music gives peace and joy to the mind, listening to music inspires a person to do something better in life.Music is also heard on many festivals, events because it enhances the excitement of the events, everyone likes to listen to their favorite music because music cannot be on just one topic, you can listen to music for any reason, if If your mind is very happy then you can listen to the music of happiness, if you are angry then music of displeasure, if you are in love with someone then love music as well as music of DJ in marriage, parties also people like to listen. Many problems of a person’s life are pacified by music because the mind and soul remain cheerful after listening to music.",
    clubLine:
      "Music produces a kind of pleasure which human nature cannot do without.",
  },
  {
    title: "Technical Club",
    about:
      "Lorem  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    head: "Umesh Singh",
    members: 60,
    image: "/images/technical.jpg",
    studentCr: [
      {
        studentCrImg: "/images/dcStudentCr1.jpg",
        name: "Tarun Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "tarunparmar752@gmail.com",
      },
      {
        studentCrImg: "/images/ecStudentCr2.jpg",
        name: "Neha Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "nehaparmar752@gmail.com",
      },
    ],
    teacherCr: [
      {
        teacherCrImg: "/images/dcStudentCr1.jpg",
        name: "Dr.Pawan Java",
        department: "Computer Science & Engineering",
        email: "pawanjavasarka@gmail.com",
      },
      {
        teacherCrImg: "/images/dcStudentCr2.jpg",
        name: "Dr.Sood Java",
        department: "Computer Science & Engineering",
        email: "hehenjavasarkaghat@gmail.com",
      },
    ],
    clubDescription:
      "When I first had to prepare a presentation for a Theatre class, I was searching for something different. Something other than famous playwrights, effective plays, and popular stage management. I was searching for something related to the youth in a way that will be able to make a change, because that is my goal in life.While surfing on the internet, I found a quote that caught my attention: ‘There is no world without theatre’. What is this world for? Who builds it? Who is its future? And what makes this world a better place? I found the answer – the youth. Yes, the youth. Each one of us. Therefore, there is no youth without theatre. This is why I decided back then that my presentation would be about the importance of theatre in education. This is because I believe that education is the strongest weapon we can use to change the world.In order to create a better world, memorising physics formulas, maths equations, poems, and the organs of a human body is not enough. It is crucial to understand what our world is all about, and it is also essential to be self-confident and creative, have empathy and communication skills, collaborate with others, learn to concentrate, know how to solve problems, trust each other, be disciplined, have fun sometimes and relax at others, have a strong memory, be aware of social issues, and appreciate the arts. In order to do all this, one must follow a drama education that has a physical, emotional, and social impact on us.",
    clubLine: "Acting is behaving truthfully under imaginary circumstances.",
  },
  {
    title: "English Club",
    about:
      "Lorem  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    head: "Neha Bhargava",
    members: 70,
    image: "/images/english.jpg",
    studentCr: [
      {
        studentCrImg: "/images/dcStudentCr1.jpg",
        name: "Tarun Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "tarunparmar752@gmail.com",
      },
      {
        studentCrImg: "/images/ecStudentCr2.jpg",
        name: "Neha Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "nehaparmar752@gmail.com",
      },
    ],
    teacherCr: [
      {
        teacherCrImg: "/images/dcStudentCr1.jpg",
        name: "Dr.Pawan Java",
        department: "Computer Science & Engineering",
        email: "pawanjavasarka@gmail.com",
      },
      {
        teacherCrImg: "/images/dcStudentCr2.jpg",
        name: "Dr.Sood Java",
        department: "Computer Science & Engineering",
        email: "hehenjavasarkaghat@gmail.com",
      },
    ],
    clubDescription:
      "When I first had to prepare a presentation for a Theatre class, I was searching for something different. Something other than famous playwrights, effective plays, and popular stage management. I was searching for something related to the youth in a way that will be able to make a change, because that is my goal in life.While surfing on the internet, I found a quote that caught my attention: ‘There is no world without theatre’. What is this world for? Who builds it? Who is its future? And what makes this world a better place? I found the answer – the youth. Yes, the youth. Each one of us. Therefore, there is no youth without theatre. This is why I decided back then that my presentation would be about the importance of theatre in education. This is because I believe that education is the strongest weapon we can use to change the world.In order to create a better world, memorising physics formulas, maths equations, poems, and the organs of a human body is not enough. It is crucial to understand what our world is all about, and it is also essential to be self-confident and creative, have empathy and communication skills, collaborate with others, learn to concentrate, know how to solve problems, trust each other, be disciplined, have fun sometimes and relax at others, have a strong memory, be aware of social issues, and appreciate the arts. In order to do all this, one must follow a drama education that has a physical, emotional, and social impact on us.",
    clubLine: "Acting is behaving truthfully under imaginary circumstances.",
  },
  {
    title: "Hindi Club",
    about:
      "Lorem  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
    head: "Aadu Parmar",
    members: 40,
    image: "/images/hindi.jpg",
    studentCr: [
      {
        studentCrImg: "/images/dcStudentCr1.jpg",
        name: "Tarun Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "tarunparmar752@gmail.com",
      },
      {
        studentCrImg: "/images/ecStudentCr2.jpg",
        name: "Neha Parmar",
        department: "Computer Science & Engineering",
        sem: "VI",
        email: "nehaparmar752@gmail.com",
      },
    ],
    teacherCr: [
      {
        teacherCrImg: "/images/dcStudentCr1.jpg",
        name: "Dr.Pawan Java",
        department: "Computer Science & Engineering",
        email: "pawanjavasarkghat@gmail.com",
      },
      {
        teacherCrImg: "/images/dcStudentCr2.jpg",
        name: "Dr.Sood Java",
        department: "Computer Science & Engineering",
        email: "hehnjavasarkaght@gmail.com",
      },
    ],
    clubDescription:
      "When I first had to prepare a presentation for a Theatre class, I was searching for something different. Something other than famous playwrights, effective plays, and popular stage management. I was searching for something related to the youth in a way that will be able to make a change, because that is my goal in life.While surfing on the internet, I found a quote that caught my attention: ‘There is no world without theatre’. What is this world for? Who builds it? Who is its future? And what makes this world a better place? I found the answer – the youth. Yes, the youth. Each one of us. Therefore, there is no youth without theatre. This is why I decided back then that my presentation would be about the importance of theatre in education. This is because I believe that education is the strongest weapon we can use to change the world.In order to create a better world, memorising physics formulas, maths equations, poems, and the organs of a human body is not enough. It is crucial to understand what our world is all about, and it is also essential to be self-confident and creative, have empathy and communication skills, collaborate with others, learn to concentrate, know how to solve problems, trust each other, be disciplined, have fun sometimes and relax at others, have a strong memory, be aware of social issues, and appreciate the arts. In order to do all this, one must follow a drama education that has a physical, emotional, and social impact on us.",
    clubLine: "Acting is behaving truthfully under imaginary circumstances.",
  },
];

club
  .insertMany(data)
  .then((data) => console.log(data))
  .catch((err) => console.log("Oops error", err));
