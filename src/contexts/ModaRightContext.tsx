import { ReactNode, createContext, useState } from 'react';

type ModalRightContextProviderProps = {
  children: ReactNode;
};

type ModalRightContextDataProps = {
  isOpen: boolean;
  handleToggle: () => void;
};

export const ModalRightContext = createContext<ModalRightContextDataProps>(
  {} as ModalRightContextDataProps
);

export function ModalRightProvider({
  children,
}: ModalRightContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((old) => !old);
  }

  return (
    <ModalRightContext.Provider
      value={{
        isOpen,
        handleToggle,
      }}
    >
      {children}
    </ModalRightContext.Provider>
  );
}
