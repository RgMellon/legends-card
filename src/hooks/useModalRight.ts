import { useContext } from 'react';

import { ModalRightContext } from '../contexts/ModaRightContext';

export function useModalRight() {
  const context = useContext(ModalRightContext);

  return context;
}
