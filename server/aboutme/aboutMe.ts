import {projects} from "./projects";

export const aboutMe = {
  name: "Avusala Chetan",
  role: "AI MERN Stack Developer",
  location: "Hyderabad, India",
  email: ["avusalachetan@gmail.com","chetanavusala@gmail.com"],
  phone: "+91 6303689310",
  github: "github.com/avusalachetan",
  linkedin: "linkedin.com/in/avusalachetan",
  education: {
    degree: "B.Tech in Electronics and Communication Engineering",
    college: "Malla Reddy Institute of Technology and Science",
    year: "2023-2027",
  },
  summary:
    "AI MERN Stack Developer specializing in scalable web applications with real-time communication and Generative AI integration. Focused on building products that are functional, maintainable, and future-proof.",
 
    skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "Python", "C"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "REST APIs", "JWT"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },

  ...projects,
  
  certifications: [
    { name: "Full Stack Development (MERN)", issuer: "GeeksForGeeks", date: "January 2026" },
    { name: "C Programming Language", issuer: "Coursera / Duke University", date: "November 2023" },
  ],
};