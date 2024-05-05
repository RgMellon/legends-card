import { TeamWithPlayer } from '../domain/dtos/response/TeamWithPlayer';
import { PlayerByTeam } from './PlayerByTeam';

type Props = {
  playersByTeams: TeamWithPlayer[] | undefined;
  onClickPlayer: (playerId: string) => void;
  week: string;
};

export function PlayersByTeamList({
  playersByTeams,
  onClickPlayer,
  week,
}: Props) {
  return (
    <section>
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">
          🗓️ Nota dos jogadores na {week || ''}
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-4 mt-4">
        {playersByTeams &&
          playersByTeams.map((item) => {
            return (
              <PlayerByTeam
                hanldeCallBack={onClickPlayer}
                key={item.id}
                teamName={item.teamName}
                teamLogo={item.logo}
                players={item.players}
              />
            );
          })}
      </div>
    </section>
  );
}
