import type { KeyboardEvent } from "react";

type InputProps = {
  que: string;
  setQue: (val: string) => void;
  loading: boolean;
  submit: () => void;
};

const Input = ({ que, setQue, loading, submit }: InputProps) => {
  const canSend = que.trim().length > 0 && !loading;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && canSend) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="input-bar">
      <div className="input-wrap">
        {/* Chat icon prefix */}
        <i
          className="ri-message-3-line"
          aria-hidden="true"
          style={{ color: "var(--text-muted)", fontSize: "16px", flexShrink: 0 }}
        />

        <input
          id="chat-input"
          type="text"
          name="question"
          value={que}
          onChange={(e) => setQue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about Chetan…"
          className="chat-input"
          autoComplete="off"
          aria-label="Type your message"
          disabled={loading}
          maxLength={500}
        />

        {/* Character count — subtle, appears when typing */}
        {que.length > 0 && (
          <span
            aria-hidden="true"
            style={{
              fontSize: "10.5px",
              color: que.length > 450 ? "#c9a96e" : "var(--text-muted)",
              flexShrink: 0,
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
          >
            {que.length}/500
          </span>
        )}

        {/* Send button */}
        <button
          id="send-btn"
          onClick={submit}
          disabled={!canSend}
          aria-label={loading ? "Sending…" : "Send message"}
          className={`send-btn ${
            loading
              ? "send-btn-loading"
              : canSend
              ? "send-btn-active"
              : "send-btn-disabled"
          }`}
        >
          {loading ? (
            <i className="ri-loader-4-line" aria-hidden="true" style={{ fontSize: "15px", animation: "spin 1s linear infinite" }} />
          ) : (
            <i className="ri-send-plane-fill" aria-hidden="true" style={{ fontSize: "14px" }} />
          )}
        </button>
      </div>

      <p className="input-hint">
        <i className="ri-corner-down-left-line" aria-hidden="true" style={{ fontSize: "10px", marginRight: "3px" }} />
        Enter to send 
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Input;
