import { CreateWeekDto } from '../dtos/request/CreateWeekDto';

export interface IRegisterWeek {
  register: (rate: CreateWeekDto) => Promise<void>;
}
