import { FetchBestPlayers } from '../data/usecases/fetch-best-players';
import { TeamData } from '../domain/usecases/FetchBestPlayers';

export function useFetchBestPlayers() {
  async function fetchBestPlayers(): Promise<TeamData> {
    try {
      return new FetchBestPlayers().fetch();
    } catch (err) {
      throw new Error('erro');
    }
  }

  return {
    fetchBestPlayers,
  };
}
