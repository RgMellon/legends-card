import { SearchPlayerResponseDTO } from '../dtos/SearchPlayerResponseDto';

export interface ISearchPlayer {
  fetch: (nickName: string) => Promise<SearchPlayerResponseDTO>;
}
