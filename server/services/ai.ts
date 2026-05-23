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
      model: "qwen/qwen3-32b",
      messages: [{ role: "system", content: portfolioContext }, ...messages],
      temperature: 0.7,
      max_tokens: 2000,
    });

    // console.log("askAI response.usage:", response?.usage);

    const raw = response.choices[0]?.message?.content ?? "Sorry, I couldn't respond.";
    return stripThinking(raw);
  } catch (err) {
    console.error("askAI error:", err);
    throw err;
  }
}


function stripThinking(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
}