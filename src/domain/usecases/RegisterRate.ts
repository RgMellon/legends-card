export interface IRegisterRate {
  register: (rate: RateProps) => Promise<void>;
}

export type RateProps = {
  stageId: string;
  playerId: string;
  rate: string | number;
};
