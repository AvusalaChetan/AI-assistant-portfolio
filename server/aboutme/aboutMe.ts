import {projects} from "./projects";

interface About {
  name: string;
  role: string;
  location: string;
  email: string[];
  phone: string;
  github: string;
  linkedin: string;
  education: {
    degree: string;
    college: string;
    year: string;
  };
  summary: string;
  skills: string[];
  projects?: typeof projects;  
  certifications: Array<{name: string; issuer: string; date: string}>;
}

export const aboutMe: About = {
  name: "Avusala Chetan",
  role: "AI MERN Stack Developer",
  location: "Hyderabad, India",
  email: ["avusalachetan@gmail.com", "chetanavusala@gmail.com"],
  phone: "+91 6303689310",
  github: "https://github.com/avusalachetan",
  linkedin: "https://linkedin.com/in/avusalachetan",
  education: {
    degree: "B.Tech in Electronics and Communication Engineering",
    college: "Malla Reddy Institute of Technology and Science",
    year: "2023-2027",
  },
  summary:
    " MERN Stack Developer specializing in scalable web applications with real-time communication and Generative AI integration. Focused on building products that are functional, maintainable, and future-proof.",

  skills: ['HTML','CSS3','Tailwindcss','JavaScript','React.js','Redux-Toolkit','Express.js','Node.js','MongoDB','Git','GitHub'],

  projects: projects,

  certifications: [
    {
      name: "Full Stack Development (MERN)",
      issuer: "GeeksForGeeks",
      date: "January 2026",
    },
    {
      name: "C Programming Language",
      issuer: "Coursera / Duke University",
      date: "November 2023",
    },
  ],
};
