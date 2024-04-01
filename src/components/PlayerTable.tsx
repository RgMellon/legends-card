import { Player } from '../domain/usecases/FetchAllPlayers';

type PlayerTableProps = {
  players: Player[];
  handlePlayerCallback: (playerId: string, playerName: string) => void;
  stageId: string;
};

export function PlayerTable({
  players,
  handlePlayerCallback,
  stageId,
}: PlayerTableProps) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="text-start">Jogador</th>
          <th className="text-start">Posição</th>
          <th className="text-start">Time</th>
          <th className="text-center">Ja tem nota essa semana?</th>
          <th className="text-start">Dar nota</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr
            onClick={() => {
              handlePlayerCallback(player.id, player.nickName);
            }}
            className={`h-16 ${
              index % 2 == 0 && `bg-purple-100 rounded-sm`
            } hover:bg-yellow hover:opacity-75`}
          >
            <td className="row-auto px-2">
              {' '}
              <img
                src={player.photo}
                className="object-cover inline-block w-10 h-10 rounded-full ring-1 mr-5"
              />{' '}
              {player?.nickName}
            </td>
            <td>{player.role}</td>

            <td>
              {' '}
              <img
                src={player.team.logo}
                className="object-cover inline-block w-8 h-8 rounded-full ring-1 mr-5"
              />{' '}
              {player.team.name}
            </td>
            <td className="text-center">
              {player.rates.find((i) => i.stageId === stageId) ? (
                <span>✅</span>
              ) : (
                <span>❌</span>
              )}
            </td>
            <td>✍🏻</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
