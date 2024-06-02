import { api } from '../../infra/http';

import { IRegisterPlayer } from '../../domain/usecases/RegisterPlayer';
import { PlayerRequestProps } from '../../domain/dtos/request/PlayerRequestDto';

export class RegisterPlayer implements IRegisterPlayer {
  async register(player: PlayerRequestProps) {
    await api.post('player', player);
  }
}
