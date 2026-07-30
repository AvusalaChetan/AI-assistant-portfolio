import DOMPurify from "dompurify";
import { useEffect, useRef } from "react";
import type { Message, MgsBoxProps } from "../types";
import { nanoid } from "nanoid";
const SUGGESTIONS = [
  "What projects have you built?",
  "What's your tech stack?",
  "How can I contact you?",
];

const sanitizeOptions = {
  ALLOWED_TAGS: [
    "b",
    "i",
    "em",
    "strong",
    "p",
    "br",
    "ul",
    "ol",
    "li",
    "a",
    "span",
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "aside",
    "heading",
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
          {messages.map((message: Message) => {
            console.log(message.content, message.role);
            return (
              <>
                {message.role === "assistant" ? (
                  <div key={nanoid()} className="msg-ai">
                    <div className="msg-ai-content">
                      <div
                        className="ai-html-content"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            message.content,
                            sanitizeOptions,
                          ),
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div key={nanoid(10)} className="msg-user">
                    <div className="msg-user-bubble">{message.content}</div>
                  </div>
                )}
              </>
            );
          })}

          {loading && (
            <div className="msg-ai">
              <div className="msg-ai-avatar" aria-hidden="true">
                <LogoSvg />
              </div>
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

const LogoSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
  >
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <path
      d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
      fill="currentColor"
      filter="url(#glow)"
    />
  </svg>
);

export default MgsBox;
