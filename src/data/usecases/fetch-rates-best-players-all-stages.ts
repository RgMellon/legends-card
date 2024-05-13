import { BestPlayersAllStageResponseDTO } from '../../domain/dtos/response/BestPlayersAllStageResponseDTO';
import { IFetchRatesBestPlayersAllStages } from '../../domain/usecases/FetchRatesBestPlayersAllStages';
import { api } from '../../infra/http';

export class FetchRatesBestPlayersAllStages
  implements IFetchRatesBestPlayersAllStages
{
  async fetch(): Promise<BestPlayersAllStageResponseDTO[]> {
    const response = await api.get(`/best/rates`);

    return response.data;
  }
}
