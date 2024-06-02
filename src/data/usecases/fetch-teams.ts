import { TeamResponse } from '../../domain/dtos/response/Team';
import { IFetchTeam } from '../../domain/usecases/FetchTeams';
import { api } from '../../infra/http';

export class FetchTeams implements IFetchTeam {
  async fetch(): Promise<TeamResponse> {
    const response = await api.get(`teams`);

    return response.data;
  }
}
