import { TeamResponse } from '../dtos/response/Team';

export interface IFetchTeam {
  fetch: (stageId: string) => Promise<TeamResponse>;
}
