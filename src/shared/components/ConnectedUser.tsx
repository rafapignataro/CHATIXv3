import Image from 'next/image';
import React from 'react';

interface ConnectedUserProps {}

const ConnectedUser: React.FC<ConnectedUserProps> = ({}) => {
  return (
    <div className="flex items-center justify-start mb-1 px-1 py-1 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
      <Image
        className="rounded-full"
        src="/perfil.png"
        width={40}
        height={40}
      />
      <p className="ml-2 text-sm truncate flex-1">
        {/* Max nick length 20 */}
        Rafael Pignataroooooededededededdeded1232312
      </p>
    </div>
  );
};
export default ConnectedUser;
