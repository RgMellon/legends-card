import {
  FetchBestPlayersModel,
  IFetchBestPlayersByTeams,
} from '../../domain/usecases/FetchBestPlayersByTeam';
import { api } from '../../infra/http';

export class FetchBestPlayersByTeam implements IFetchBestPlayersByTeams {
  async fetch(stageId: string): Promise<FetchBestPlayersModel> {
    const response = await api.get(`players/team/?stageId=${stageId}`);
    return response.data;
  }
}
