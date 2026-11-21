import dotent from "dotenv";
dotent.config();

     

export const config = {
  GROQ_API_KEY: process.env.GROQ_API_KEY,
  FRONTEND_URL: process.env.FRONTEND_URL,
};
