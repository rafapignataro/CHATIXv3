import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import { createContext, ReactNode, useContext } from 'react';

interface CreateRoomModalProviderProps {
  children: ReactNode;
}

type CreateRoomModalContextData = UseDisclosureReturn;

const CreateRoomModalContext = createContext({} as CreateRoomModalContextData);

export function CreateRoomModalProvider({
  children,
}: CreateRoomModalProviderProps) {
  const disclosure = useDisclosure();
  console.log('disclosure', disclosure);

  return (
    <CreateRoomModalContext.Provider value={disclosure}>
      {children}
    </CreateRoomModalContext.Provider>
  );
}

export const useCreateRoomModal = () => useContext(CreateRoomModalContext);
