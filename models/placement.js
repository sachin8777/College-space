const mongoose = require('mongoose');
const { Schema } = mongoose;

const placementsSchema = new Schema ({
   name: String,
   department: String,
   year: String,
   email: String,
   about: String,
   ctc : String,
   company : String,
   designation: String,
   ghithubLink: String,
   linkedInLink: String,
   image: String
})

module.exports = mongoose.model('placement',placementsSchema);