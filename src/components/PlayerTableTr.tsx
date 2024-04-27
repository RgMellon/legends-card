import { Player } from '../domain/usecases/FetchAllPlayers';
import { PiCheckCircle, PiXCircle, PiEyeLight, PiPencil } from 'react-icons/pi';
import { useModalRight } from '../hooks/useModalRight';
import { useSelectedPlayer } from '../hooks/useSelectedPlayer';

type PlayerTableTrProps = {
  handlePlayerCallback: (playerId: string, playerName: string) => void;
  player: Player;
  index: number;
};

export function PlayerTableTr({
  handlePlayerCallback,
  player,
  index,
}: PlayerTableTrProps) {
  const { handleToggle } = useModalRight();
  const { handleSelect } = useSelectedPlayer();

  function handleOnClick(playerId: string, playerNickName: string) {
    handlePlayerCallback(playerId, playerNickName);
  }

  function handleDetail() {
    handleToggle();
    handleSelect(player);
  }

  const hasRate = player.hasRateInThisWeek ? (
    <PiCheckCircle color="#13ce66" size={20} />
  ) : (
    <PiXCircle color="#ff7849" size={20} />
  );

  return (
    <tr
      className={`h-16 ${
        index % 2 == 0 && `bg-purple-100 rounded-sm`
      } hover:bg-yellow hover:opacity-45`}
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
      <td className="text-center">{hasRate}</td>
      <td className="flex justify-around items-center h-16">
        <button
          className="w-10 h-10 flex items-center justify-center"
          onClick={() => {
            handleOnClick(player.id, player.nickName);
          }}
        >
          <PiPencil color="#8492a6" size={20} />{' '}
        </button>

        <button
          className="w-10 h-10 flex items-center justify-center"
          onClick={handleDetail}
        >
          <PiEyeLight color="#1fb6ff" size={20} />{' '}
        </button>
      </td>
    </tr>
  );
}
