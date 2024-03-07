import { useNavigate } from 'react-router-dom';

export function Card() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate('/profile/2313');
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
        src="https://pbs.twimg.com/media/E6Qvps4WUAExBZt.jpg:large"
        alt="player-icon"
      />

      <div className="flex items-center w-20 mt-4 justify-between">
        <img
          className="object-cover inline-block w-5 h-5 rounded-full"
          src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-top.png"
          alt=""
        />

        <p className="text-lg font-bold">Robo</p>
      </div>

      <div className="flex items-center mt-4 justify-between">
        <p className="opacity-60">Nota 5 </p>

        <img
          className="object-cover inline-block w-5 h-5"
          src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/arrow-right.png"
          alt=""
        />
        <p>Nota 8 </p>
      </div>
    </button>
  );
}
