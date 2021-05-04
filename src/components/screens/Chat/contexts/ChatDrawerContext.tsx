import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface ChatDrawerProviderProps {
  children: ReactNode;
}

type ChatDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as ChatDrawerContextData);

export function ChatDrawerProvider({ children }: ChatDrawerProviderProps) {
  const disclosure = useDisclosure();

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useChatDrawer = () => useContext(SidebarDrawerContext);
