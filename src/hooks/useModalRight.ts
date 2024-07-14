// import { useContext } from 'react';

import { useState } from 'react';

// import { ModalRightContext } from '../contexts/ModaRightContext';

export function useModalRight() {
  const [isOpenModalRight, setIsOpenModalRight] = useState(false);

  function handleToggleModalRight() {
    setIsOpenModalRight((old) => !old);
  }

  return {
    isOpenModalRight,
    handleToggleModalRight,
  };
}
