import Groq from "groq-sdk";
import { portfolioContext } from "../aboutme/context";
import dotenv from "dotenv";

dotenv.config();

const client = new Groq({ apiKey: process.env.GROQ_API_KEY! });

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function askAI(messages: Message[]): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "system", content: portfolioContext }, ...messages],
      temperature: 0.7,
      max_tokens: 2500,
    });
    
    return response.choices[0]?.message?.content ?? "Sorry, I couldn't respond.";
  } catch (err) {
    throw err;
  }
}

