import { useQuery } from 'react-query';
import { useFetchBestPlayers } from '../hooks/useFetchBestPlayers';
import { useFetchBestPlayersByTeam } from '../hooks/useFetchBestPlayersByTeams';
import { HomeTemplate } from '../template/HomeTemplate';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const { fetchBestPlayers } = useFetchBestPlayers(
    'fea24f83-c75e-415b-9188-b9886a3d2747'
  );
  const { fetchBestPlayersByTeam } = useFetchBestPlayersByTeam(
    '25dabba5-c590-4015-b351-8925e5522e63'
  );

  const fetchData = async () => {
    let bestPlayers;
    let bestPlayersByTeamData;

    try {
      bestPlayers = await fetchBestPlayers();
    } catch (error) {
      console.error('Erro ao buscar os melhores jogadores:', error);
    }

    try {
      const result = await fetchBestPlayersByTeam();
      bestPlayersByTeamData = Object.values(result.teams);
    } catch (error) {
      console.error('Erro ao buscar os melhores jogadores por equipe:', error);
    }

    return { bestPlayers, bestPlayersByTeamData };
  };

  const { data, isLoading } = useQuery(['bestPlayersAndByTeam'], fetchData);

  function onClickPlayer(playerId: string) {
    navigate(`/profile/${playerId}`);
  }

  return (
    !isLoading && (
      <HomeTemplate
        onClick={onClickPlayer}
        title="🐐 Goats da semana"
        subTitle="🗓️ Nota dos jogadores última semana"
        bestPlayers={data?.bestPlayers}
        bestPlayersByTeamData={data?.bestPlayersByTeamData}
      />
    )
  );
}
