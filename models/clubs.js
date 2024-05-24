const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubSchema = new Schema({
  title: String,
  about: String,
  studentCr: [
    {
      studentCrImg: String,
      name: String,
      department: String,
      email: String,
    },
  ],
  teacherCr: [
    {
      teacherCrImg: String,
      name: String,
      department: String,
      email: String,
    },
  ],
  members: Number,
  image: String,
  clubDescription: String,
  clubLine: String,
});

module.exports = mongoose.model('club',clubSchema);