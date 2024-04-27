import { useNavigate } from 'react-router-dom';
import { Player } from '../domain/usecases/FetchBestPlayers';

type CardProps = Player & {
  rate: string;
};

export function Card({ id, nickName, photo, role, rate }: CardProps) {
  const navigate = useNavigate();

  const position = {
    ADC: 'icon-position-bottom',
    MID: 'icon-position-middle',
    JG: 'icon-position-jungle',
    TOP: 'icon-position-top',
    SUP: 'icon-position-utility',
  };

  return (
    <button
      onClick={() => {
        navigate(`/profile/${id}`);
      }}
      className="grid 
                 shadow-sm 
                 h-full 
                 w-full 
                 justify-items-center 
                 overflow-hidden 
                 place-items-center 
                 p-6 py-8 
                 rounded-md
                 bg-purple-200
                 relative
                 "
    >
      <img
        className="object-cover inline-block w-20 h-20 rounded-full ring-2 ring-yellow"
        src={photo}
        alt="player-icon"
      />

      <div className="flex items-center w-20 mt-4 justify-between">
        <img
          className="object-cover inline-block w-5 h-5 rounded-full"
          src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/${position[role]}.png`}
          alt="icon-of-role"
        />

        <p className="text-lg font-bold">{nickName}</p>
      </div>

      <div className="flex items-center mt-4 justify-between">
        <p className="font-bold">
          Nota <span className="text-yellow ml-2"> {rate} </span>
        </p>
      </div>
    </button>
  );
}
