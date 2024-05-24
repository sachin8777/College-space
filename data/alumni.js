const mongoose = require("mongoose");
const alumni = require("../models/alumni");

const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/collegeDb");

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

const data = [
  {
    name: "Sachin",
    department: "Btech CSE",
    year: 2024,
    about: "I can eat anything",
    email: "sachinrajput1888@gmail.com",
    image: "/images/alumni/student1.jpeg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
  {
    name: "Tarun Parmar",
    department: "Btech CSE",
    year: 1969,
    about: "I can eat anything",
    email: "tarun@gmail.com",
    image: "/images/alumni/student2.jpg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
  {
    name: "Varun Parmar",
    department: "Btech CSE",
    year: 1969,
    about: "I can eat anything",
    email: "varun@gmail.com",
    image: "/images/alumni/student3.jpg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
  {
    name: "Pankaj Chauhan",
    department: "Btech CSE",
    year: 1969,
    about: "I can eat anything",
    email: "panku@gmail.com",
    image: "/images/alumni/student4.jpg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
  {
    name: "Aadu Parmar",
    department: "Btech CSE",
    year: 1969,
    about: "I can eat anything AND CUREENTLY WORKING IN EATUP.COM",
    email: "aadu@gmail.com",
    image: "/images/alumni/student5.jpg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
  {
    name: "Deepak",
    department: "Btech CSE",
    year: 1969,
    about: "I can eat anything",
    email: "deep@gmail.com",
    image: "/images/alumni/student6.jpg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
  {
    name: "Umesh Singh",
    department: "Btech CSE",
    year: 1969,
    about: "I can eat anything.",
    email: "umesh@gmail.com",
    image: "/images/alumni/student8.jpg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
  {
    name: "Sourabh Gegu",
    department: "Btech CSE",
    year: 1969,
    about: "I can eat anything and fuck u baby",
    email: "sourab@gmail.com",
    image: "/images/alumni/student7.jpg",
    linkedInLink: "linkedin.com/in/sachin888",
    githubLink: "https://github.com/tarunparmar752",
  },
];



alumni
  .insertMany(data)
  .then((data) => console.log(data))
  .catch((err) => console.log("Oops error", err));