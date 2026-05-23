export type Message = {
  role: 'assistant' | 'user' ;
  content: string;
}

export type MgsBoxProps = {
  messages: Message[];
}
