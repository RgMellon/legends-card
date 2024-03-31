import { FetchBestPlayers } from '../data/usecases/fetch-best-players';
import { TeamData } from '../domain/usecases/FetchBestPlayers';

export function useFetchBestPlayers(stageId: string) {
  async function fetchBestPlayers(): Promise<TeamData> {
    try {
      return new FetchBestPlayers().fetch(stageId);
    } catch (err) {
      throw new Error('erro');
    }
  }

  return {
    fetchBestPlayers,
  };
}
