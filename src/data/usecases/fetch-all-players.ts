import {
  IFetchAllPlayers,
  Player,
} from '../../domain/usecases/FetchAllPlayers';

import { api } from '../../infra/http';

export class FetchAllPlayers implements IFetchAllPlayers {
  async fetch(): Promise<Player[]> {
    const response = await api.get(`players`);

    return response.data;
  }
}
