import { FetchAllPlayers } from '../data/usecases/fetch-all-players';
import { Player } from '../domain/usecases/FetchAllPlayers';

export function useFetchAllPlayers() {
  async function fetchAllPlayers(group: string): Promise<Player[]> {
    try {
      return new FetchAllPlayers().fetch(group);
    } catch (err) {
      throw new Error('erro');
    }
  }

  return {
    fetchAllPlayers,
  };
}
