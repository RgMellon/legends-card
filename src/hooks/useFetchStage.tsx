import { useContext } from 'react';

import { StageContext } from '../contexts/StageContext';

export function useStages() {
  const context = useContext(StageContext);

  return context;
}
