import Image from 'next/image';
import React from 'react';

import { Message } from '../interfaces/Message';

interface ChatMessageProps {
  message: Message;
  isAuthor: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAuthor }) => {
  const chatMessageContainerStyle = isAuthor ? 'self-end' : 'self-start';

  const chatMessageStyle = isAuthor
    ? 'bg-purple-300 dark:bg-purple-800 rounded-tr-none'
    : 'bg-gray-50 dark:bg-gray-700 rounded-tl-none';

  return (
    <div className={`flex mb-4 ${chatMessageContainerStyle}`}>
      {!isAuthor && (
        <div className="hidden xs:flex items-start justify-center mr-2">
          <Image
            className="rounded-full shadow-md"
            src="/perfil.png"
            width="25"
            height="25"
          />
        </div>
      )}
      <div>
        <div
          className={`flex items-center w-full text-xs mb-0.5 justify-${
            isAuthor ? 'end' : 'start'
          }`}
        >
          {message.author} - {message.date}
        </div>
        <div
          className={`py-2 px-3  text-sm rounded-md max-w-xs md:max-w-xl shadow-md relative ${chatMessageStyle}`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
