import { useNavigate } from 'react-router-dom';
import { useStages } from './useFetchStage';
import { useFetchBestPlayers } from './useFetchBestPlayers';
import { useFetchBestPlayersByTeam } from './useFetchBestPlayersByTeams';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { TeamData } from '../domain/usecases/FetchBestPlayers';
import { Teams } from '../domain/usecases/FetchBestPlayersByTeam';

interface HomeData {
  bestPlayers: TeamData | undefined;
  bestPlayersByTeamData: Teams[] | undefined;
}

export function useHome() {
  const navigate = useNavigate();
  const { onLoadStage } = useStages();
  const { fetchBestPlayers } = useFetchBestPlayers();
  const { fetchBestPlayersByTeam } = useFetchBestPlayersByTeam();

  const [homeData, setHomeData] = useState<HomeData>({
    bestPlayers: undefined,
    bestPlayersByTeamData: undefined,
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
      const bestPlayersByTeamResult = await fetchBestPlayersByTeam(
        currentStage
      );
      const bestPlayers = bestPlayersResult;
      const bestPlayersByTeamData = Object.values(
        bestPlayersByTeamResult.teams
      );
      setHomeData({ bestPlayers, bestPlayersByTeamData });
    } catch (error) {
      console.error('Erro ao buscar os dados da página inicial:', error);
    }
  };

  function onClickPlayer(playerId: string) {
    navigate(`/profile/${playerId}`);
  }

  return {
    homeData,
    onClickPlayer,
    fetchData,
  };
}
