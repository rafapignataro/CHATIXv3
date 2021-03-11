import React from 'react';

import { Message } from '../interfaces/Message';
import ChatMessage from './ChatMessage';

interface ChatMainProps {
  messages: Message[];
}
const USERNAME = 'rafix';

const ChatMain: React.FC<ChatMainProps> = ({ messages }) => {
  return (
    <main className="bg-gray-100 text-black dark:text-white dark:bg-gray-600 flex-1 flex flex-col pt-4 px-6 overflow-auto">
      {messages &&
        messages.map((message) => (
          <ChatMessage
            message={message}
            isAuthor={message.author === USERNAME}
          />
        ))}
    </main>
  );
};
export default ChatMain;
