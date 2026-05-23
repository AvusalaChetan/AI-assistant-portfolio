import type {MgsBoxProps, Message} from "../types";
import DOMPurify from "dompurify";

const MgsBox = ({messages}: MgsBoxProps) => {
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
      "heading",
      'aside',
      'h1',
      
    ],
    ALLOWED_ATTR: ["href","title", "rel", "target","style",],
  };
  return (
    <div
      id="mgsBox"
      className="min-h-0 flex-1 overflow-y-auto p-4 flex flex-col gap-6"
    >
      {messages.map((msg: Message, i: number) => (
        <div key={i}>
          {msg.role === "assistant" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(msg.content, sanitizeOptions),
              }}
            />
          ) : (
            <span className="text-purple-400 p-4 flex  items-center gap-2 justify-end border  w-full  text-start ">
              {/* <span className="text-black inline-block w-5 h-5  text-sm font-bold  rounded-full  text-center">
                U
              </span>{" "} */}
              {msg.content}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MgsBox;
