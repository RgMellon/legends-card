import { FetchBestPlayersByTeam } from '../data/usecases/fetch-best-players-by-team';
import { FetchBestPlayersModel } from '../domain/usecases/FetchBestPlayersByTeam';

export function useFetchBestPlayersByTeam(stageId: string) {
  async function fetchBestPlayersByTeam(): Promise<FetchBestPlayersModel> {
    try {
      return new FetchBestPlayersByTeam().fetch(stageId);
    } catch (err) {
      throw new Error('erro');
    }
  }

  return {
    fetchBestPlayersByTeam,
  };
}
