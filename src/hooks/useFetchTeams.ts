import { FetchBestPlayers } from '../data/usecases/fetch-best-players';
import { TeamData } from '../domain/usecases/FetchBestPlayers';

export function useFetchTeams() {
  async function fetch(stageId: string): Promise<TeamData> {
    try {
      return new FetchBestPlayers().fetch(stageId);
    } catch (err) {
      throw new Error('erro');
    }
  }

  return {
    fetch,
  };
}
