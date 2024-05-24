const mongoose = require('mongoose');
const users = require('../models/users');

const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/collegeDb");

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

const data = [
  {
    name: "Tarun Parmar",
    department: "cse",
    rollNo: 20010603053,
    semester: 6,
    email: "tarunparmar752@gmail.com",
    password: "nihao",
  },
];

users
  .insertMany(data)
  .then((data) => console.log(data))
  .catch((err) => console.log("Oops error", err));