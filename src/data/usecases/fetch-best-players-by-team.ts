import { TeamWithPlayer } from '../../domain/dtos/response/TeamWithPlayer';
import { IFetchBestPlayersByTeams } from '../../domain/usecases/FetchBestPlayersByTeam';
import { api } from '../../infra/http';

export class FetchBestPlayersByTeam implements IFetchBestPlayersByTeams {
  async fetch(stageId: string): Promise<TeamWithPlayer[]> {
    const response = await api.get(`players/team/v2?stageId=${stageId}`);
    return response.data;
  }
}
