export interface IFetchStages {
  fetch: () => Promise<StageModel[]>;
}

export type StageModel = {
  id: string;
  slug: string;
  stageInitDate: string;
  stageEndDate: string;
};
