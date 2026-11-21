import {projects} from "../data/projects";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export interface About {
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
