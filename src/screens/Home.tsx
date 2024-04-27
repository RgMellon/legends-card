import { useQuery } from 'react-query';
import { HomeTemplate } from '../template/HomeTemplate';
import { useHome } from '../hooks/useHome';
import { useStages } from '../hooks/useFetchStage';

export function Home() {
  const { fetchData, homeData, onClickPlayer } = useHome();
  const { selectedHomeStage, stages } = useStages();

  const week = stages.find((stage) => stage.id === selectedHomeStage);

  const { isLoading } = useQuery(
    [
      'bestPlayersAndByTeam',
      selectedHomeStage /* outros parâmetros necessários */,
    ],
    async () => {
      const result = await fetchData(selectedHomeStage);
      return result;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    !isLoading && (
      <HomeTemplate
        onClick={onClickPlayer}
        title="🐐 Goats da semana"
        subTitle={`🗓️ Nota dos jogadores na semana ${week?.slug}`}
        bestPlayers={homeData?.bestPlayers}
        bestPlayersByTeamData={homeData?.bestPlayersByTeamData}
      />
    )
  );
}
