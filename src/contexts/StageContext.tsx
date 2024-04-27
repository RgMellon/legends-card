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
  setSelectedStageId: (stageId: string) => void;
  selectedStage: string;
  handleSelectHomeStage: (stageId: string) => void;
  selectedHomeStage: string;
};

export const StageContext = createContext<StageContextDataProps>(
  {} as StageContextDataProps
);

export function StageProvider({ children }: StageContextProviderProps) {
  const [stageIsLoading, setStageIsLoading] = useState(true);
  const [stages, setStages] = useState<StageModel[]>([]);
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedHomeStage, setSelectedHomeStage] = useState('');

  async function onLoadStage() {
    try {
      setStageIsLoading(true);
      const response = await new FetchStages().fetch();
      setSelectedHomeStage(response.stages[response.stages.length - 1].id);
      setSelectedStage(response.stages[response.stages.length - 1].id);
      setStages(response.stages);
      return response;
    } catch (err) {
      toast.error('Ops, algo de errado aconteceu ao carregar as semanas');
    } finally {
      setStageIsLoading(false);
    }
  }

  function setSelectedStageId(stageId: string) {
    setSelectedStage(stageId);
  }

  function handleSelectHomeStage(stageId: string) {
    setSelectedHomeStage(stageId);
  }

  return (
    <StageContext.Provider
      value={{
        stages,
        stageIsLoading,
        onLoadStage,
        setSelectedStageId,
        selectedStage,
        handleSelectHomeStage,
        selectedHomeStage,
      }}
    >
      {children}
    </StageContext.Provider>
  );
}
