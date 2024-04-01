export interface IFetchAllPlayers {
  fetch: (group: string) => Promise<Player[]>;
}

interface Rate {
  rate: number;
  stage: {
    id: string;
    slug: string;
    stageInitDate: string;
    stageEndDate: string;
    createdAt: string;
    updatedAt: string;
  };
  stageId: string;
}

interface Team {
  id: string;
  name: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

export interface Player {
  id: string;
  nickName: string;
  role: string;
  photo: string;
  nationality: string;
  createdAt: string;
  updatedAt: string;
  teamId: string;
  rates: Rate[];
  team: Team;
}
