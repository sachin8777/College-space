const mongoose = require('mongoose');
const student = require('../models/students');

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
    students: [
      {
        sem: 6,
        studentList: [
          {
            name: "Tarun Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Just love it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin",
            about:
              "I love Computer Science and enjoy building amazing things in it.Onto lots of fun stuff.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.I also love banana",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Just love it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Onto lots of fun stuff.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.I also love banana",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Just love it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Onto lots of fun stuff.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.I also love banana",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
      {
        sem: 4,
        studentList: [
          {
            name: "Tarun Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Just love it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student4.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Onto lots of fun stuff.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student5.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.I also love banana",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student6.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Just love it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student4.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Onto lots of fun stuff.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student5.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.I also love banana",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student6.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
      {
        sem: 4,
        studentList: [
          {
            name: "Tarun Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Just love it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student7.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Onto lots of fun stuff.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student8.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.I also love banana",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student9.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Just love it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student7.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.Onto lots of fun stuff.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student8.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love Computer Science and enjoy building amazing things in it.I also love banana",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student9.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
    ],
  },
  {
    dep: "me",
    department: "Mechanical Engineering",
    image: "/images/mechanical.jpg",
    students: [
      {
        sem: 6,
        studentList: [
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
      {
        sem: 4,
        studentList: [
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student4.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student5.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student6.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student4.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student5.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student6.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student4.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student5.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student6.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
      {
        sem: 2,
        studentList: [
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student7.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student8.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student9.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about:
              "I love Machines and enjoy building amazing machines. I would love to build an amazing engine by myself one day.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student7.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love Machinery and enjoy building crazy things in it. Would love to research on it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student8.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love playing around machines and explore how they function and looking forward to build something useful.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student9.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
    ],
  },
  {
    dep: "ee",
    department: "Electrical engineering",
    image: "/images/electrical.jpg",
    students: [
      {
        sem: 6,
        studentList: [
          {
            name: "Tarun Parmar",
            about: "I love electrical appliances and enjoy knowing about them.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love electrical instruments and enjoy building amazing things in it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love electrical engineering and enjoy making creative things using it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about: "I love electrical appliances and enjoy knowing about them.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student1.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love electrical instruments and enjoy building amazing things in it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student2.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love electrical engineering and enjoy making creative things using it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student3.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
      {
        sem: 4,
        studentList: [
          {
            name: "Tarun Parmar",
            about: "I love electrical appliances and enjoy knowing about them.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student4.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love electrical instruments and enjoy building amazing things in it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student5.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love electrical engineering and enjoy making creative things using it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student6.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
      {
        sem: 4,
        studentList: [
          {
            name: "Tarun Parmar",
            about: "I love electrical appliances and enjoy knowing about them.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student7.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love electrical instruments and enjoy building amazing things in it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student8.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love electrical engineering and enjoy making creative things using it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student9.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about: "I love electrical appliances and enjoy knowing about them.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student7.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love electrical instruments and enjoy building amazing things in it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student8.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love electrical engineering and enjoy making creative things using it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student9.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Tarun Parmar",
            about: "I love electrical appliances and enjoy knowing about them.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student7.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Umesh Parmar",
            about:
              "I love electrical instruments and enjoy building amazing things in it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student8.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
          {
            name: "Sachin Parmar",
            about:
              "I love electrical engineering and enjoy making creative things using it.",
            email: "tarunparmar752@gmail.com",
            image: "/images/students/student9.jpg",
            fbLink: "https://www.facebook.com/ayush.thakur.77312477",
            linkedInLink: "https://www.linkedin.com/in/ptarun/",
            instaLink: "https://www.instagram.com/sachin_7_77/",
            githubLink: "https://github.com/tarunparmar752",
            
            twitterLink: "https://twitter.com/Tarunparmar07",
          },
        ],
      },
    ],
  },
];

student
  .insertMany(data)
  .then((data) => console.log(data))
  .catch((err) => console.log("Oops error", err));