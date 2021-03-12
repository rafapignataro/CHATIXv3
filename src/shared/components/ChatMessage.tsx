import React from 'react';

import { Message } from '../interfaces/Message';

interface ChatMessageProps {
  message: Message;
  isAuthor: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAuthor }) => {
  const chatMessageBoxStyle = isAuthor
    ? 'bg-purple-300 dark:bg-purple-800 self-end rounded-tr-none'
    : 'bg-gray-50 dark:bg-gray-700 self-start rounded-tl-none';
  const chatMessageHeaderStyle = isAuthor
    ? 'text-purple-900 dark:text-white'
    : 'text-gray-600 dark:text-gray-100';

  return (
    <div
      className={`py-2 px-3 mb-3 rounded-md max-w-xs lg:max-w-2xl shadow-md relative ${chatMessageBoxStyle}`}
    >
      <div
        className={`flex items-center justify-between w-full ${chatMessageHeaderStyle}`}
      >
        <div>
          <strong className="">{message.author}</strong>
        </div>
        <p className="text-xs">{message.date}</p>
      </div>
      <div className="text-sm">{message.content}</div>
      {/* {isAuthor ? (
        <div className="absolute -right-5 bottom-2 author_message_arrow"></div>
      ) : (
        <div className="absolute -left-5 bottom-2 foreign_message_arrow"></div>
      )} */}
    </div>
  );
};

export default ChatMessage;
