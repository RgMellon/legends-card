import { Player } from '../domain/usecases/FetchAllPlayers';
import { PlayerTableTr } from './PlayerTableTr';

type PlayerTableProps = {
  players: Player[];
  handlePlayerCallback: (playerId: string, playerName: string) => void;
  handleShowDetails: () => void;
};

export function PlayerTable({
  players,
  handlePlayerCallback,
  handleShowDetails,
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
          <PlayerTableTr
            player={player}
            handlePlayerCallback={handlePlayerCallback}
            index={index}
            handleShowDetails={handleShowDetails}
          />
        ))}
      </tbody>
    </table>
  );
}
