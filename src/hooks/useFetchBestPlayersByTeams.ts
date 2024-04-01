import { FetchBestPlayersByTeam } from '../data/usecases/fetch-best-players-by-team';
import { FetchBestPlayersModel } from '../domain/usecases/FetchBestPlayersByTeam';

export function useFetchBestPlayersByTeam() {
  async function fetchBestPlayersByTeam(
    stageId: string
  ): Promise<FetchBestPlayersModel> {
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
