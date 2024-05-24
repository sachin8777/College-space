const mongoose = require ('mongoose');
const announcement = require('../models/announcement');

const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/collegeDb");

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

const data = [
{
  text: "Dance club is going to organize auditions for HPTU meet performance.",
  department : "Club"
},
{
  text: "English club is going to organize auditions for HPTU meet host.",
  department : "Club"
},
{
  text: "Our mid semesters are from next month",
  department : "Exam"
},
{
  text: "Students name required from sports meet",
  department : "Club"
},
{
  text: "Google is arriving next month for interviews.",
  department : "Placements"
},
{
  text: "Dance club is going to organize auditions for HPTU meet performance.",
  department : "Club"
},
]


announcement
  .insertMany(data)
  .then((data) => console.log(data))
  .catch((err) => console.log("Oops error", err));