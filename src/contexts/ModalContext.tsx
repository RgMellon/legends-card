import { ReactNode, createContext, useState } from 'react';

type ModalContextProviderProps = {
  children: ReactNode;
};

type ModalContextDataProps = {
  isOpen: boolean;
  handleToggle: () => void;
};

export const ModalContext = createContext<ModalContextDataProps>(
  {} as ModalContextDataProps
);

export function ModalProvider({ children }: ModalContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((old) => !old);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        handleToggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
