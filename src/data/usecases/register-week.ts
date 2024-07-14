import { api } from '../../infra/http';

import { IRegisterWeek } from '../../domain/usecases/RegisterWeek';
import { CreateWeekDto } from '../../domain/dtos/request/CreateWeekDto';

export class RegisterWeek implements IRegisterWeek {
  async register(week: CreateWeekDto) {
    await api.post('stages', week);
  }
}
