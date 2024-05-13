import { Player } from '../domain/dtos/response/Player';

type PlayerByTeamProps = {
  teamName: string;
  teamLogo: string;
  players: Player[];
  hanldeCallBack: (playerId: string) => void;
};

export function PlayerByTeam({
  teamName,
  teamLogo,
  players,
  hanldeCallBack,
}: PlayerByTeamProps) {
  return (
    <div className="shadow-lg h-full w-full rounded-md p-5 bg-purple-100 relative">
      <header className="flex items-center mt-4 w-[100%] justify-between absolute left-0 right-0 top-[-16px] p-4 bg-purple-200">
        <img
          className="object-cover inline-block w-10 h-10 rounded-full ring-1 ml-2"
          src={teamLogo}
          alt="team-icon"
        />
        <p className="text-md font-bold">{teamName}</p>
      </header>

      <ul className="list-none mt-16">
        {players.map((player) => (
          <li
            onClick={() => {
              hanldeCallBack(player.id);
            }}
            className="mt-4 flex w-full items-center justify-between hover:bg-purple-100 cursor-pointer p-1"
          >
            <div className="flex">
              <img
                className="object-cover inline-block w-8 h-8 rounded-full ring-1 ring-purple-100"
                src={player.photo}
                alt="player-icon"
              />
              <p className="ml-2">{player.nickName}</p>
            </div>

            <p>{player?.rate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
