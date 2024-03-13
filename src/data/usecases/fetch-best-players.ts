import {
  IFetchBestPlayers,
  TeamData,
} from '../../domain/usecases/FetchBestPlayers';
import { api } from '../../infra/http';

export class FetchBestPlayers implements IFetchBestPlayers {
  async fetch(): Promise<TeamData> {
    const response = await api.get(
      `rates/best?stageId=85234115-9005-4cc6-9d41-756b7ad062a9`
    );

    return response.data;
  }
}
