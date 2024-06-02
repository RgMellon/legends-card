export interface IUpdatePlayerStatus {
  update: (playerId: string) => Promise<void>;
}
