import { Player } from '../dtos/response/Player';

export interface IFetchBestPlayers {
  fetch: (stageId: string) => Promise<TeamData>;
}

type RoleData = {
  id: string;
  rate: number;
  createdAt: string;
  updatedAt: string;
  stageId: string;
  playerId: string;
  player: Player;
};

export type Roles = {
  adc: RoleData;
  mid: RoleData;
  jg: RoleData;
  top: RoleData;
  sup: RoleData;
};

export type TeamData = {
  [key: string]: RoleData;
};
