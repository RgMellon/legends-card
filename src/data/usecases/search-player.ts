import { SearchPlayerResponseDTO } from '../../domain/dtos/SearchPlayerResponseDto';
import { ISearchPlayer } from '../../domain/usecases/SearchPlayer';

import { api } from '../../infra/http';

export class SearchPlayer implements ISearchPlayer {
  async fetch(nickName: string): Promise<SearchPlayerResponseDTO> {
    const response = await api.get(`search?name=${nickName}`);

    return response.data;
  }
}
