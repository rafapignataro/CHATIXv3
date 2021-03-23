import React, { FormEvent, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { InputBarForm } from '../../../../shared/InputBarForm';

interface ChatFooterProps {
  handleSubmit: (text: string) => void;
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ handleSubmit }) => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 py-4 px-4 md:px-6 shadow-xl">
      <div className="max-w-6xl mx-auto">
        <InputBarForm
          Icon={FaLongArrowAltRight}
          placeholder="Write your message"
          handleSubmit={handleSubmit}
        />
      </div>
    </footer>
  );
};
