import Groq from "groq-sdk";
import {portfolioContext} from "../data/context";
import {config} from "../config/config";
import { Message } from "../types/types";

const client = new Groq({apiKey: config.GROQ_API_KEY});

 
export async function askAI(messages: Message[]): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{role: "system", content: portfolioContext}, ...messages],
      temperature: 0.7,
      max_tokens: 2500,
    });

    return (
      response.choices[0]?.message?.content ?? "Sorry, I couldn't respond."
    );
  } catch (err) {
    throw err;
  }
}
