export interface IFetchBestPlayers {
  fetch: (stageId: string) => Promise<TeamData>;
}

export type Player = {
  id: string;
  nickName: string;
  photo: string;
  role: string;
};

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
