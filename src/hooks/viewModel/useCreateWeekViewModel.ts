import toast from 'react-hot-toast';
import { CreateWeekDto } from '../../domain/dtos/request/CreateWeekDto';
import { RegisterWeek } from '../../data/usecases/register-week';

export function useCreateWeekViewModel() {
  async function handleCreate(week: CreateWeekDto) {
    try {
      const res = await new RegisterWeek().register(week);
      toast.success('Semana registrada com sucesso');
      return res;
    } catch (err) {
      toast.error('Ops, aconteceu algum erro ao registrar a semana');
      console.log(err);
    }
  }

  return {
    handleCreate,
  };
}
