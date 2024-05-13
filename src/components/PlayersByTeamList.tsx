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
      <div
        className="shadow-sm flex items-center rounded-md  mt-8 justify-between "
        style={{ background: 'rgba(223, 177, 96, 0.5)' }}
      >
        <h2 className="font-bold text-4xl ml-8">
          {' '}
          Nota dos jogadores na {week || ''}
        </h2>

        <div className="">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/da4dtow-bc398b72-5485-496d-b9e3-ef4dd6780d16.png/v1/fill/w_1023,h_636/_league_of_legends__high_noon_jhin__render__by_popokupingupop90_da4dtow-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvZDA5OWQzMTYtOThjZi00MDk1LWEyZjktMzJjY2E0MjE5YmFhXC9kYTRkdG93LWJjMzk4YjcyLTU0ODUtNDk2ZC1iOWUzLWVmNGRkNjc4MGQxNi5wbmciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LMozdNTD6ITMesmYziL8BT8bESRgxzK7h-KRNFbEGkE"
            alt=""
            className="w-80 right-0"
          />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3 mt-4 shadow-lg">
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
