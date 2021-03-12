import React from 'react';

interface ChatFooterProps {}

const ChatFooter: React.FC<ChatFooterProps> = ({}) => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-4 px-6 shadow-xl">
      <form>
        <div className="flex items-center justify-between h-18 max-w-6xl mx-auto">
          <input
            type="text"
            placeholder="Write your message"
            className="bg-gray-200 dark:bg-gray-800 rounded flex-1 h-10 mr-3 px-4 focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-400 dark:bg-purple-500 py-2 px-3 rounded text-white hover:bg-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-full w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </footer>
  );
};
export default ChatFooter;
