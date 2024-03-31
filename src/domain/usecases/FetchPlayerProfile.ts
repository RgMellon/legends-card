export interface IFetchPlayerProfile {
  fetch: (id: string) => Promise<PlayerProfileDto>;
}

type Rate = {
  id: string;
  rate: number;
  stageId: string;
  stage: {
    slug: string;
  };
};

type Team = {
  logo: string;
  name: string;
};

export type PlayerProfileWithChartValues = PlayerProfileDto & {
  allRates: number[];
  categorieSlug: string[];
};

export type PlayerProfileDto = {
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
  minRate: number;
  maxRate: number;
  averageRate: number;
};
