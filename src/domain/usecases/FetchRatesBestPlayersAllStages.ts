import { BestPlayersAllStageResponseDTO } from '../dtos/response/BestPlayersAllStageResponseDTO';

export interface IFetchRatesBestPlayersAllStages {
  fetch: () => Promise<BestPlayersAllStageResponseDTO[]>;
}
