type InputProps = {
  que: string;
  setQue: (val: string) => void;
  loading: boolean;
  submit: () => void;
};

const Input = ({que, setQue, loading, submit}: InputProps) => {
  return (
    <div className="inputContainer w-full shrink-0 flex items-center justify-between py-2 px-4">
      <input
        onChange={(e) => setQue(e.target.value)}
        type="text"
        name="que"
        value={que}
        placeholder="ask any question..."
        className="obsidian-input w-[75%] h-full"
      />
      <button onClick={submit}>{loading ? "loading..." : "ask"}</button>
    </div>
  );
};

export default Input;
