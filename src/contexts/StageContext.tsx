import { ReactNode, createContext, useState } from 'react';
import { StageModel, StageProps } from '../domain/usecases/FetchStages';
import toast from 'react-hot-toast';
import { FetchStages } from '../data/usecases/fetch-stages';

type StageContextProviderProps = {
  children: ReactNode;
};

type StageContextDataProps = {
  stageIsLoading: boolean;
  stages: StageModel[];
  onLoadStage: () => Promise<StageProps | undefined>;
};

export const StageContext = createContext<StageContextDataProps>(
  {} as StageContextDataProps
);

export function StageProvider({ children }: StageContextProviderProps) {
  const [stageIsLoading, setStageIsLoading] = useState(true);
  const [stages, setStages] = useState<StageModel[]>([]);

  async function onLoadStage() {
    try {
      setStageIsLoading(true);
      const response = await new FetchStages().fetch();
      setStages(response.stages);
      return response;
    } catch (err) {
      toast.error('Ops, algo de errado aconteceu ao carregar as semanas');
    } finally {
      setStageIsLoading(false);
    }
  }

  return (
    <StageContext.Provider
      value={{
        stages,
        stageIsLoading,
        onLoadStage,
      }}
    >
      {children}
    </StageContext.Provider>
  );
}
