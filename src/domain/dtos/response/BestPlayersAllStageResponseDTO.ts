export type BestPlayersAllStageResponseDTO = {
  role: string;
  players: BestPlayersAllStagePlayerResponseDTO[];
};

type BestPlayersAllStagePlayerResponseDTO = {
  id: string;
  nickName: string;
  photo: string;
  role: string;
  totalRate: number;
};
