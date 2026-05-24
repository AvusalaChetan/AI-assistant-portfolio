import { useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import type { MgsBoxProps, Message } from "../types";

const SUGGESTIONS = [
  "What projects have you built?",
  "What's your tech stack?",
  "Tell me about your experience",
  "How can I contact you?",
];

const sanitizeOptions = {
  ALLOWED_TAGS: [
    "b", "i", "em", "strong", "p", "br",
    "ul", "ol", "li", "a", "span", "div",
    "h1", "h2", "h3", "h4", "aside", "heading",
  ],
  ALLOWED_ATTR: ["href", "title", "rel", "target", "style"],
};

type MgsBoxPropsExtended = MgsBoxProps & {
  loading?: boolean;
  onSuggestion?: (text: string) => void;
};

const MgsBox = ({ messages, loading, onSuggestion }: MgsBoxPropsExtended) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const isEmpty = messages.length === 0 && !loading;

  return (
    <div id="mgsBox" className="messages-area">
      {isEmpty ? (
    
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">✦</div>
          <p className="empty-title">Hi, I'm Chetan's AI</p>
          <p className="empty-sub">
            Ask me about his projects, skills, or experience — I'm here to help.
          </p>
          {onSuggestion && (
            <div className="suggestion-chips" role="list">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="chip"
                  role="listitem"
                  onClick={() => onSuggestion(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {messages.map((msg: Message, i: number) =>
            msg.role === "assistant" ? (
              <div key={i} className="msg-ai">
                <div className="msg-ai-avatar" aria-hidden="true">✦</div>
                <div className="msg-ai-content">
                  <div
                    className="ai-html-content"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(msg.content, sanitizeOptions),
                    }}
                  />
                </div>
              </div>
            ) : (
            
              <div key={i} className="msg-user">
                <div className="msg-user-bubble">{msg.content}</div>
              </div>
            )
          )}

        
          {loading && (
            <div className="msg-ai">
              <div className="msg-ai-avatar" aria-hidden="true">✦</div>
              <div className="msg-ai-content">
                <div className="typing-indicator" aria-label="AI is typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <div ref={bottomRef} />
    </div>
  );
};

export default MgsBox;
