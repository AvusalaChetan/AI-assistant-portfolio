import {About} from "../types/types";
import {projects} from "./projects";

export const aboutMe: About = {
  name: "Avusala Chetan",
  role: "MERN Stack Developer",
  location: "Hyderabad, India",
  email: ["avusalachetan@gmail.com"],
  phone: "+91 6303689310",
  github: "https://github.com/AvusalaChetan",
  linkedin: "https://linkedin.com/in/avusalachetan",
  education: {
    degree: "B.Tech in Electronics and Communication Engineering",
    college: "Malla Reddy Institute of Technology and Science",
    year: "2023-2027",
  },
  summary:
    "Final-year ECE student and MERN Stack Developer skilled in React, TypeScript, Node.js, Express.js, and MongoDB. Published express-jetstart, an open-source Express CLI on npm with 1,300+ downloads. Open-source contributor to the mx-icons React icon library. Seeking a MERN/Full Stack Developer internship to contribute to real-world projects.",

  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Auth",
    "HTML",
    "CSS",
    "React.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "GSAP (basic)",
    "Git",
    "GitHub",
    "NPM",
    "Postman",
    "Cloudinary",
  ],

  projects: projects,

  certifications: [
    {
      name: "Full Stack Development (MERN)",
      issuer: "Sheryians Coding School",
      date: "2026 (In Progress)",
    },
    {
      name: "Entrepreneurship-cum-Skill Development Programme (E-SDP) on Emerging IoT Applications",
      issuer: "MSME Tool Room (CITD), Hyderabad",
      date: "Jul-Sep 2026",
    },
  ],
  achivements: [
    {
      name: "mx-icons",
      type: "Open-Source Contribution",
      description:
        "Contributed the JavaScript icon in 6 style variants as React components to the mx-icons React icon library, registered in the icon index and metadata.",
      contribution: "PR #59 (merged), shipped in release v1.1.2",
      techStack: ["React", "JavaScript"],
      github: "https://github.com/ig-imanish/mx-icons/pull/59", 
    },
  ],
};
