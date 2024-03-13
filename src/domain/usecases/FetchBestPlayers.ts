export interface IFetchBestPlayers {
  fetch: () => Promise<FetchBestPlayersModel>;
}

export type FetchBestPlayersModel = TeamData;

export interface Player {
  id: string;
  nickName: string;
  photo: string;
  role: string;
}

interface RoleData {
  id: string;
  rate: number;
  createdAt: string;
  updatedAt: string;
  stageId: string;
  playerId: string;
  player: Player;
}

export interface Roles {
  adc: RoleData;
  mid: RoleData;
  jg: RoleData;
  top: RoleData;
  sup: RoleData;
}

export interface TeamData {
  [key: string]: RoleData;
}
