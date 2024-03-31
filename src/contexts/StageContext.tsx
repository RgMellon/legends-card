import { ReactNode, createContext, useEffect, useState } from 'react';
import { StageModel } from '../domain/usecases/FetchStages';
import toast from 'react-hot-toast';
import { FetchStages } from '../data/usecases/fetch-stages';

type StageContextProviderProps = {
  children: ReactNode;
};

type StageContextDataProps = {
  stageIsLoading: boolean;
  stages: StageModel[];
};

export const StageContext = createContext<StageContextDataProps>(
  {} as StageContextDataProps
);

export function StageProvider({ children }: StageContextProviderProps) {
  const [stageIsLoading, setStageIsLoading] = useState(true);
  const [stages, setStages] = useState<StageModel[]>([]);

  async function onLoad() {
    try {
      setStageIsLoading(true);
      const response = await new FetchStages().fetch();
      //TODO fix type
      setStages(response.stages);
    } catch (err) {
      toast.error('Ops, algo de errado aconteceu ao carregar as semanas');
    } finally {
      setStageIsLoading(false);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <StageContext.Provider
      value={{
        stages,
        stageIsLoading,
      }}
    >
      {children}
    </StageContext.Provider>
  );
}
