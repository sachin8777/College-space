const mongoose = require("mongoose");
const student = require("../models/students");

const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/collegeDb");
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

const data = [
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 8,
    students: [
    
    ]
  } ,   
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 7,
    students: [
    
    ]
  } ,   
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 6,
    students: [
    
    ]
  } ,   
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 5,
    students: [
    
    ]
  } ,   
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 4,
    students: [
    
    ]
  } ,   
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 3,
    students: [
    
    ]
  } ,   
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 2,
    students: [
    
    ]
  } ,   
  {
    dep: "cse",
    department: "Computer Science and Engineering",
    image: "/images/cse.jpg",
    sem: 1,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 8,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 7,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 6,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 5,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 4,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 3,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 2,
    students: [
    
    ]
  } ,   
  {
    dep: "me",
    department: "Computer Science and Engineering",
    image: "/images/mechanical.jpg",
    sem: 1,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 8,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 7,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 6,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 5,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 4,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 3,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 2,
    students: [
    
    ]
  } ,   
  {
    dep: "ee",
    department: "Computer Science and Engineering",
    image: "/images/electrical.jpg",
    sem: 1,
    students: [
    ]
  } 

]
student
  .insertMany(data)
  .then((data) => console.log(data))
  .catch((err) => console.log("Oops error", err));
