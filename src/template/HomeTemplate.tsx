import { Card } from '../components/Card';
import { PlayerByTeam } from '../components/PlayerByTeam';
import { TeamData } from '../domain/usecases/FetchBestPlayers';
import { Teams } from '../domain/usecases/FetchBestPlayersByTeam';

type HomeTemplateProps = {
  title: string;
  subTitle: string;
  bestPlayers?: TeamData;
  bestPlayersByTeamData?: Teams[];
  onClick: (playerId: string) => void;
};

export function HomeTemplate({
  title,
  subTitle,
  bestPlayers,
  bestPlayersByTeamData,
  onClick,
}: HomeTemplateProps) {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      <div className="mt-4">
        {bestPlayers && (
          <div className={` grid gap-4 grid-cols-4 grid-rows-2`}>
            {Object.values(bestPlayers).map((item) => (
              <Card
                rate={String(item.rate)}
                id={item.player.id}
                nickName={item.player.nickName}
                photo={item.player.photo}
                role={item.player.role}
              />
            ))}
          </div>
        )}
      </div>

      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">{subTitle}</h2>
      </div>

      {/* TODO arrumar tipagem */}
      <div className="grid gap-4 grid-cols-4 mt-4">
        {bestPlayersByTeamData &&
          bestPlayersByTeamData.map((item, key) => (
            <PlayerByTeam
              hanldeCallBack={onClick}
              key={key}
              teamName={item[0].team.name}
              teamLogo={item[0].team.logo}
              players={item}
            />
          ))}
      </div>
    </div>
  );
}
