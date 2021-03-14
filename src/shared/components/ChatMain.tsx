import React from 'react';

import { Message } from '../interfaces/Message';
import ChatMessage from './ChatMessage';

interface ChatMainProps {
  messages: Message[];
}
const USERNAME = 'rafix';

const ChatMain: React.FC<ChatMainProps> = ({ messages }) => {
  return (
    <main className="flex-1 flex pt-4 px-4 md:px-6 overflow-auto">
      <div className="flex flex-col w-full max-w-6xl mx-auto ">
        {messages &&
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              isAuthor={message.author === USERNAME}
            />
          ))}
      </div>
    </main>
  );
};
export default ChatMain;
