import { IUpdatePlayerStatus } from '../../domain/usecases/UpdatePlayerStatus';
import { api } from '../../infra/http';

export class UpdatePlayerStatus implements IUpdatePlayerStatus {
  async update(playerId: string) {
    await api.put(`desactive/player?playerId=${playerId}`);
  }
}
