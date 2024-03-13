import { useQuery } from 'react-query';
import { Card } from '../components/Card';
import { PlayerByTeam } from '../components/PlayerByTeam';
import { useFetchBestPlayers } from '../hooks/useFetchBestPlayers';
import { TeamData } from '../domain/usecases/FetchBestPlayers';

type HomeTemplateProps = {
  title: string;
  subTitle: string;
};

export function HomeTemplate({ title, subTitle }: HomeTemplateProps) {
  const { fetchBestPlayers } = useFetchBestPlayers();
  const { data, isLoading } = useQuery<TeamData>(
    ['bestPlayers'],
    fetchBestPlayers
  );

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      <div className="mt-4">
        {!isLoading && !!data && (
          <div className={` grid gap-4 grid-cols-4 grid-rows-2`}>
            <Card
              rate={String(data.top.rate)}
              id={data.top?.player.id}
              nickName={data.top.player.nickName}
              photo={data.top.player.photo}
              role={data.top.player.role}
            />

            <Card
              rate={String(data.jg.rate)}
              id={data.jg?.player.id}
              nickName={data.jg.player.nickName}
              photo={data.jg.player.photo}
              role={data.jg.player.role}
            />

            <Card
              rate={String(data.mid.rate)}
              id={data.mid?.player.id}
              nickName={data.mid.player.nickName}
              photo={data.mid.player.photo}
              role={data.mid.player.role}
            />

            <Card
              rate={String(data.adc.rate)}
              id={data.adc?.player.id}
              nickName={data.adc.player.nickName}
              photo={data.adc.player.photo}
              role={data.adc.player.role}
            />

            <Card
              rate={String(data.sup.rate)}
              id={data.sup?.player.id}
              nickName={data.sup.player.nickName}
              photo={data.sup.player.photo}
              role={data.sup.player.role}
            />
          </div>
        )}
      </div>

      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">{subTitle}</h2>
      </div>

      <div className="grid gap-4 grid-cols-4 mt-4">
        <PlayerByTeam />
        <PlayerByTeam />
        <PlayerByTeam />
      </div>
    </div>
  );
}
