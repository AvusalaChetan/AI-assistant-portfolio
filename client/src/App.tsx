import { useState } from "react";
import Header from "./components/Header";
import { useChat } from "./hooks/useChat";
import MgsBox from "./components/MgsBox";
import Input from "./components/Input";

const App = () => {
  const [isServerConnect] = useState(true);
  const { messages, loading, sendMessage } = useChat();
  const [que, setQue] = useState("");

  const handleSubmit = async () => {
    const trimmed = que.trim();
    if (!trimmed || loading) return;
    await sendMessage(trimmed);
    setQue("");
  };

  const handleSuggestion = (text: string) => {
    setQue(text);
  };

  return (
    <main
      className="app-bg"
      style={{
        height: "100dvh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflow: "hidden",
      }}
    >
      <section
        id="chat-container"
        className="chat-container"
        style={{ width: "100%", maxWidth: "780px", height: "100%", maxHeight: "860px" }}
        aria-label="AI Chat interface"
      >
        <Header isServerConnect={isServerConnect} />

        <MgsBox
          messages={messages}
          loading={loading}
          onSuggestion={handleSuggestion}
        />

        <Input
          que={que}
          setQue={setQue}
          loading={loading}
          submit={handleSubmit}
        />
      </section>
    </main>
  );
};

export default App;
