const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  dep: String,
  department: String,
  image: String,
  sem: Number,
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("student", studentSchema);

// studentList:[{ name: String,
//    about: String,
//    email:String,
//    fbLink: String,
//    image: String,
//    linkedInLink: String,
//    instaLink: String,
//    githubLink: String,
//    twitterLink: String
// }]
