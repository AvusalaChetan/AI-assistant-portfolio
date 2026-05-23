import {useState} from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL 

if(!BACKEND_URL){
    throw new Error("VITE_BACKEND_URL is not defined in .env file")
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (que: string) => {
    if (!que.trim()) return;

    const newMessages: Message[] = [...messages, {role: "user", content: que}];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({que, history: newMessages}),
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        {role: "assistant", content: data.aiResponse},
      ]);
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {messages, loading, sendMessage};
};
