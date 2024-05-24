const mongoose = require('mongoose');
const exam = require("../models/exams");

const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/collegeDb");

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});

const data = [
  {
    department: "cse",
    departmentName: "Computer Science Engineering",
    semester: [
      {
        sem: 1,
        subject: [
          {
            subjectName: "ENGLISH COMMUNICATION SKILLS",
            courseCode: "HS-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENGINEERING MATHEMATIC-I",
            courseCode: "MA-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENGINEERING PHYSICS",
            courseCode: "PH-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENGINEERING MECHANICS",
            courseCode: "ME-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "COMPUTER FUNDAMENTALS AND PROGRAMMING IN C++",
            courseCode: "CS-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENGINEERING DRAWING & GRAPHICS",
            courseCode: "ME-102",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENVIRONMENTAL SCIENCE",
            courseCode: "HS-102",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "COMMUNICATION LAB",
            courseCode: "HS-111",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENGINEERING PHYSICS LAB",
            courseCode: "PH-111",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "COMPUTER PROGRAMMING LAB",
            courseCode: "CS-111",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 2,
        subject: [
          {
            subjectName: "ENGINEERING CHEMISTRY",
            courseCode: "CH-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "PRINCIPLES OF ELECTRICAL ENGG.",
            courseCode: "EE-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "FUNDAMENTALS OF ELECTRONICS ENGG",
            courseCode: "EC-101",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "WORKSHOP TECHNOLOGY",
            courseCode: "ME-103",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "DISASTER MANAGEMENT",
            courseCode: "HS-103",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "BUISNESS COMMUNICATIONS",
            courseCode: "HS-204",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENGINEERING MATHEMATICS-II",
            courseCode: "MA-202",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ELECTRICAL ENGG. LAB",
            courseCode: "EE-111",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ENGINEERNG CHEMISTRY LAB",
            courseCode: "CH-111",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "ELECTRONICS ENGG. LAB",
            courseCode: "EC-111",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 3,
        subject: [
          {
            subjectName: "PROBABILITY AND STATISTICS",
            courseCode: "MA-301",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "INDUSTRIAL ECONOMICS AND MANAGEMENT",
            courseCode: "HS-305",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "DATA STRUCTURE ",
            courseCode: "CS-301",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "OBJECT ORIENTED PROGRAMMING USING C++",
            courseCode: "CS-302",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "DIGITAL ELECTRONICS",
            courseCode: "EC-302",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "COMPUTER ARCHITECTURE AND ORGANIZATION",
            courseCode: "CS-303",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName:
              "SOCIOLOGY AND ELEMENTS OF INDIAN HISTORY FOR ENGINEERS",
            courseCode: "HS-306",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "GERMAN LANGUAGE - I",
            courseCode: "HS-307",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "FRENCH LANGUAGE - I ",
            courseCode: "HS-308",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "DATA STRUCTURE LAB",
            courseCode: "CS-311",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "C++ Programming Lab",
            courseCode: "CS-312",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "DIGITAL ELECTRONICS LAB",
            courseCode: "EC-306",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 4,
        subject: [
          {
            subjectName: "OPTIMIZATION AND CALCULUS OF VARIATIONS",
            courseCode: "MA-401",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "HUMAN VALUES AND PROFESSIONAL ETHICS",
            courseCode: "HS-409",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "DATABASE MANAGAMENT SYSTEMS",
            courseCode: "CS-401",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "OPERATING SYSTEMS",
            courseCode: "CS-402",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "THEORY OF COMPUTATION",
            courseCode: "CS-404",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "MICROPROCESSORS & PERIPHERALS",
            courseCode: "EC-402",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "LAW FOR ENGINEERS",
            courseCode: "HS-410",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "GERMAN LANGUAGE - II",
            courseCode: "HS 411",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "FRENCH LANGUAGE - II",
            courseCode: "HS-412",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "DATABASE MANAGEMENT SYSTEM LAB",
            courseCode: "CS-411",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "MICROPROCESSOR & PERIPHERALS LAB",
            courseCode: "EC-405",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "OPERATING SYSTEM LAB",
            courseCode: "CS-412",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 5,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 6,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 7,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 8,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
    ],
  },
  {
    department: "me",
    departmentName: "Mechanical Engineering",
    semester: [
      {
        sem: 8,
        subject: [
          {
            subjectName: "Mechaniacal Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 7,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 6,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 5,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 4,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 3,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 2,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
    ],
  },
  {
    department: "ee",
    departmentName: "Electrical Engineering",
    semester: [
      {
        sem: 8,
        subject: [
          {
            subjectName: "Electrical Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 7,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 6,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 5,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 4,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 3,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
      {
        sem: 2,
        subject: [
          {
            subjectName: "Data Structures",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Algorithm and Design",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Artificial Intelligence",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
          {
            subjectName: "Maths",
            notesLink:
              "https://drive.google.com/drive/folders/1WiJcy4LrHNHw-khw16cb0IyeU5HArUrt?usp=share_link",
            questionPaperLink:
              "https://drive.google.com/drive/folders/1tWr4_mz3erZsi3LAT7bTtElhSvYkEeAc?usp=sharing",
          },
        ],
      },
    ],
  },
];


exam.insertMany(data)
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})