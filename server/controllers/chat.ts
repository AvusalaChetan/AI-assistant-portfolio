import { Request, Response } from "express";
import { askAI } from "../services/ai";


export const chat = async (req: Request, res: Response) => {
  const { que, history } = req.body;
  if (!que || typeof que !== "string" || que.trim() === "") {
    return res.status(400).json({ error: "Invalid question provided" });
  }
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey)
    return res.status(500).json({
      error: `internal server err groq api key is missing ${apiKey}`,
    });

  try {

    const messages = Array.isArray(history) && history.length > 0
      ? history
      : [{ role: "user", content: que.trim() }];

    const aiResponse = await askAI(messages);
    return res.status(200).json({ aiResponse });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error" });
  } 
}; 
