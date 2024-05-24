const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniSchema = new Schema({
  name: String,
  department: String,
  year: Number,
  email: String,
  about: String,
  image: String,
  linkedInLink: String,
  githubLink: String
});

module.exports = mongoose.model("alumni", alumniSchema);
