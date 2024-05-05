import { TeamWithPlayer } from '../dtos/response/TeamWithPlayer';

export interface IFetchBestPlayersByTeams {
  fetch: (stageId: string) => Promise<TeamWithPlayer[]>;
}

// export type FetchBestPlayersModel = {
//   teams: Teams[];
// };

export interface Player {
  id: string;
  nickName: string;
  photo: string;
  role: string;
  rate: number;
  team: {
    id: string;
    logo: string;
    name: string;
  };
}

export type Teams = {
  [key: string]: Player;
};
