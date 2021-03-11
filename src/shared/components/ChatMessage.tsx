import React from 'react';

import { Message } from '../interfaces/Message';

interface ChatMessageProps {
  message: Message;
  isAuthor: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isAuthor = false,
}) => {
  return (
    <div
      className={`py-2 px-3 mb-3 rounded-md max-w-xs lg:max-w-2xl shadow-md  ${
        isAuthor
          ? 'bg-purple-300 dark:bg-purple-500 self-end'
          : 'bg-gray-200 dark:bg-gray-500 self-start'
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <strong>{message.author}</strong>
        <p className="text-xs">{message.date}</p>
      </div>

      <div className="leading-tight">{message.content}</div>
    </div>
  );
};
export default ChatMessage;
