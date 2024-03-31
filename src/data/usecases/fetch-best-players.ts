import {
  IFetchBestPlayers,
  TeamData,
} from '../../domain/usecases/FetchBestPlayers';
import { api } from '../../infra/http';

export class FetchBestPlayers implements IFetchBestPlayers {
  async fetch(stageId: string): Promise<TeamData> {
    const response = await api.get(`rates/best?stageId=${stageId}`);

    return response.data;
  }
}
