export interface IFetchStages {
  fetch: () => Promise<StageProps>;
}

export type StageModel = {
  id: string;
  slug: string;
  stageInitDate: string;
  stageEndDate: string;
};

export type StageProps = {
  stages: StageModel[];
};
