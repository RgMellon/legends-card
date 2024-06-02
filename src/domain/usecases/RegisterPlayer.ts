import { PlayerRequestProps } from '../dtos/request/PlayerRequestDto';

export interface IRegisterPlayer {
  register: (player: PlayerRequestProps) => Promise<void>;
}
