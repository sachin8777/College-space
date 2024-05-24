const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const examSchema = new Schema ({
department : String,
departmentName : String,
semester : [{
 sem : Number,
 subject : [{
 subjectName : String,
 courseCode : String,
 notesLink : String,
 questionPaperLink : String,
 
}]
}]
}) 

module.exports = mongoose.model('exam',examSchema);