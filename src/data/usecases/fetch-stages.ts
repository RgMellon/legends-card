import { IFetchStages, StageProps } from '../../domain/usecases/FetchStages';
import { api } from '../../infra/http';

export class FetchStages implements IFetchStages {
  async fetch(): Promise<StageProps> {
    const response = await api.get(`stages`);
    return response.data;
  }
}
