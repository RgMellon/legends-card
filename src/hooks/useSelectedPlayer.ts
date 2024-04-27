import { useContext } from 'react';

import { SelectedPlayerContext } from '../contexts/SelectedPlayerContext';

export function useSelectedPlayer() {
  const context = useContext(SelectedPlayerContext);

  return context;
}
