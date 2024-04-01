import { useQuery } from 'react-query';
import { HomeTemplate } from '../template/HomeTemplate';
import { useHome } from '../hooks/useHome';

export function Home() {
  const { fetchData, homeData, onClickPlayer } = useHome();
  const { isLoading } = useQuery(['bestPlayersAndByTeam'], fetchData);

  return (
    !isLoading && (
      <HomeTemplate
        onClick={onClickPlayer}
        title="🐐 Goats da semana"
        subTitle="🗓️ Nota dos jogadores última semana"
        bestPlayers={homeData?.bestPlayers}
        bestPlayersByTeamData={homeData?.bestPlayersByTeamData}
      />
    )
  );
}
