const mongoose = require("mongoose");
const placement = require("../models/placement");

const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/collegeDb");

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("Database connected");
});


const data = [
  {
    name: "Umesh Singh",
    department: "CSE",
    year: "2020 - 2024",
    email: "umesh0101010@gmail.com",
    about:
      "I am very happy to let u all know that i've managed to get into google. It was an awesome journey and I'm very excited to begin this new journey.",
    ctc: "35 Lakhs",
    company: "Google",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/umesh.jpg",
  },
  {
    name: "Tarun Parmar",
    department: "CSE",
    year: "2020 - 2024",
    email: "tarunparmar752@gmail.com",
    about:
      "I am very happy to let u all know that i've managed to get into google. It was an awesome journey and I'm very excited to begin this new journey. I would love to guide anyone of you who want to know about how to get into google. Contact me through Linked In",
    ctc: "35 Lakhs",
    company: "Facebook",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/tarun.jpg",
  },
  {
    name: "Sachin Singh",
    department: "CSE",
    year: "2021 - 2025",
    email: "sachin234@gmail.com",
    about:
      "I am very happy to let u all know that i've managed to get into amazon. It was an awesome journey and I'm very excited to begin this new journey.",
    ctc: "35 Lakhs",
    company: "Amazon",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/umesh.jpg",
  },
  {
    name: "Mridul Bhangyal",
    department: "CSE",
    year: "1993 - 2024",
    email: "mridulOinky@gmail.com",
    about:
      "I am very happy to let u all know that i've cracked accenture. It was an awesome journey and I'm very excited to begin this new journey.",
    ctc: "32 Lakhs",
    company: "Accenture",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/mridul.jpg",
  },
  {
    name: "Umesh Singh",
    department: "CSE",
    year: "2020 - 2024",
    email: "umesh0101010@gmail.com",
    about:
      "I have cracked microsoft for the SDE 1 and I'm very happy as well as excited to begin my journey",
    ctc: "45 Lakhs",
    company: "Microsoft",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/umesh2.jpg",
  },
  {
    name: "Umesh Singh",
    department: "CSE",
    year: "2020 - 2024",
    email: "umesh0101010@gmail.com",
    about:
      "I am very happy to let u all know that i've managed to get into google. It was an awesome journey and I'm very excited to begin this new journey.",
    ctc: "35 Lakhs",
    company: "Google",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/umesh3.jpg",
  },
  {
    name: "Tarun Parmar",
    department: "CSE",
    year: "2020 - 2024",
    email: "tarunparmar752@gmail.com",
    about:
      "I am very happy to let u all know that i've managed to get into google. It was an awesome journey and I'm very excited to begin this new journey. I would love to guide anyone of you who want to know about how to get into google. Contact me through Linked In",
    ctc: "35 Lakhs",
    company: "Facebook",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/random.jpg",
  },
  {
    name: "Sachin Singh",
    department: "CSE",
    year: "2021 - 2025",
    email: "sachin234@gmail.com",
    about:
      "I am very happy to let u all know that i've managed to get into amazon. It was an awesome journey and I'm very excited to begin this new journey.",
    ctc: "35 Lakhs",
    company: "Amazon",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/random2.jpg",
  },
  {
    name: "Mridul Bhangyal",
    department: "CSE",
    year: "1993 - 2024",
    email: "mridulOinky@gmail.com",
    about:
      "I am very happy to let u all know that i've cracked accenture. It was an awesome journey and I'm very excited to begin this new journey.",
    ctc: "32 Lakhs",
    company: "Accenture",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/mridul2.jpg",
  },
  {
    name: "Umesh Singh",
    department: "CSE",
    year: "2020 - 2024",
    email: "umesh0101010@gmail.com",
    about:
      "I have cracked microsoft for the SDE 1 and I'm very happy as well as excited to begin my journey",
    ctc: "45 Lakhs",
    company: "Microsoft",
    designation: "SDE 1",
    ghithubLink: "https://github.com/tarunparmar752",
    linkedInLink: "https://www.linkedin.com/in/ptarun/",
    image: "/images/placements/random3.jpg",
  }

];


placement.insertMany(data)
.then((data) => { console.log(data)})
.catch((e) => {console.log(e)})