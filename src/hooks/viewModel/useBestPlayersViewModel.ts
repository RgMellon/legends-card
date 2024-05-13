import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { useState } from 'react';

import { FetchRatesBestPlayersAllStages } from '../../data/usecases/fetch-rates-best-players-all-stages';
import { BestPlayersAllStageResponseDTO } from '../../domain/dtos/response/BestPlayersAllStageResponseDTO';

export function useBestPlayersViewModel() {
  const [players, setPlayers] = useState<BestPlayersAllStageResponseDTO[]>([]);

  const { isLoading } = useQuery(['fetchBestRatesAllStages'], () => onLoad(), {
    refetchOnWindowFocus: false,
  });

  async function onLoad() {
    try {
      const response = await new FetchRatesBestPlayersAllStages().fetch();
      setPlayers(response);
    } catch (err) {
      toast.error('Ops, algo de errado aconteceu ao obter os jogadores =/');
    }
  }

  return {
    // onRegisterRate,
    // loadRegister,
    isLoading,
    players,
    // players: formatedPlayers,
    // handleChangeGroupBy,
  };
}
