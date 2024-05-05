import { TeamData } from '../domain/usecases/FetchBestPlayers';
import { Card } from './Card';

type Props = {
  bestPlayers: TeamData | undefined;
};

export function BestPlayerList({ bestPlayers }: Props) {
  return (
    <div className="mt-4">
      {bestPlayers && (
        <div className={` grid gap-4 grid-cols-4 grid-rows-2`}>
          {Object.values(bestPlayers).map((item) => (
            <Card
              rate={item.rate}
              id={item.player.id}
              nickName={item.player.nickName}
              photo={item.player.photo}
              role={item.player.role}
            />
          ))}
        </div>
      )}
    </div>
  );
}
