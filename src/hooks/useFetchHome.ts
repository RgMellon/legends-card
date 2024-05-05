import { useStages } from './useFetchStage';
import { useFetchBestPlayers } from './useFetchBestPlayers';
import { useFetchBestPlayersByTeam } from './useFetchBestPlayersByTeams';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { TeamData } from '../domain/usecases/FetchBestPlayers';
import { TeamWithPlayer } from '../domain/dtos/response/TeamWithPlayer';
import { useQuery } from 'react-query';

export interface HomeData {
  bestPlayers: TeamData | undefined;
  playersByTeams: TeamWithPlayer[] | undefined;
}

export function useFetchHome() {
  const { onLoadStage, selectedHomeStage } = useStages();
  const { fetchBestPlayers } = useFetchBestPlayers();
  const { fetchBestPlayersByTeam } = useFetchBestPlayersByTeam();

  const { isLoading } = useQuery(
    ['bestPlayersAndByTeam', selectedHomeStage],
    async () => {
      const result = await fetchData(selectedHomeStage);
      return result;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const [homeData, setHomeData] = useState<HomeData>({
    bestPlayers: undefined,
    playersByTeams: undefined,
  });

  const fetchData = async (currentStage: string) => {
    if (!currentStage) {
      const resultStage = await onLoadStage();

      if (!resultStage?.stages) {
        toast.error('Falha ao recuperar as semanas');
        return;
      }
    }

    try {
      const bestPlayersResult = await fetchBestPlayers(currentStage);
      const playersByTeams = await fetchBestPlayersByTeam(currentStage);

      const bestPlayers = bestPlayersResult;

      setHomeData({ bestPlayers, playersByTeams });
    } catch (error) {
      console.error('Erro ao buscar os dados da página inicial:', error);
    }
  };

  return {
    homeData,
    fetchData,
    isLoading,
  };
}
