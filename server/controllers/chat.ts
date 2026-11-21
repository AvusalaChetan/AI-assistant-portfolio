import {Request, Response} from "express";
import {config} from "../config/config";
import {askAI} from "../services/ai";


export const chat = async (req: Request, res: Response) => {
  if (!config.GROQ_API_KEY) {
    return res.status(500).json({error: "GROQ API key is missing"});
  }

  const {que, history} = req.body;

  const messages =
    Array.isArray(history) && history.length > 0
      ? history
      : [{role: "user", content: que?.trim()}];

  try {
    const aiResponse = await askAI(messages);
    return res.status(200).json({aiResponse});
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return res.status(500).json({error: message});
  }
};
