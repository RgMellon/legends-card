import { RegisterRatePlayer } from '../data/usecases/register-rate-player';
import { RateProps } from '../domain/usecases/RegisterRate';
import toast from 'react-hot-toast';
import { useModal } from './useModal';
import { useState } from 'react';

export function useRegisterRate() {
  const [loadRegister, setLoadRegister] = useState(false);
  const { handleToggle } = useModal();

  async function handleRegisterRate(rate: RateProps): Promise<void> {
    try {
      setLoadRegister(true);
      const parsed = {
        ...rate,
        rate: Number(rate.rate),
      };

      await new RegisterRatePlayer().register(parsed);
      toast.success('Nota do jogador cadastrada');
      handleToggle();
      setLoadRegister(false);
    } catch (err) {
      toast.error('Ops, algo errado aconteceu ao cadastrar a nota do jogador');
    }
  }

  return { handleRegisterRate, loadRegister };
}
