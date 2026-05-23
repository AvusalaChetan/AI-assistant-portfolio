import {useState} from "react";
import Header from "./components/Header";
import {useChat} from "./hooks/useChat";
import MgsBox from "./components/MgsBox";
import Input from "./components/Input";

const App = () => {
  const [isServerConnect] = useState(true);

  const {messages, loading, sendMessage} = useChat();
  const [que, setQue] = useState("");

  const handleSubmit = async () => {
    await sendMessage(que);
    setQue("");
  };

  return (
    <>
      <main className="dot-grid h-screen w-screen overflow-x-hidden p-4 ">
        <section
          id="container"
          className="overflow-hidden flex h-full w-full flex-col rounded-tr-2xl rounded-tl-2xl container-rounded"
        >
          <Header isServerConnect={isServerConnect} />

          <hr className="text-gray-500 relative" />

          <div className="mt-2 flex flex-1 min-h-0 w-full flex-col border border-zinc-700">
            <MgsBox messages={messages} />
            <Input
              que={que}
              setQue={setQue}
              loading={loading}
              submit={handleSubmit}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
