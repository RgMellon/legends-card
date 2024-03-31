import { api } from '../../infra/http';

import {
  IFetchPlayerProfile,
  PlayerProfileDto,
} from '../../domain/usecases/FetchPlayerProfile';

export class FetchPlayerProfile implements IFetchPlayerProfile {
  async fetch(id: string): Promise<PlayerProfileDto> {
    const response = await api.get(`/profile/${id}`);
    return response.data;
  }
}
