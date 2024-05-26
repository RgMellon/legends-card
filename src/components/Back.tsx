import { useNavigate } from 'react-router-dom';

export function Back() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex p-8 mt-4 rounded-md bg-purple-200">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <img
          className="w-5 inline-block mr-4"
          src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/buttons/button-framedarrow.png"
          alt="button-back"
        />

        <p className="inline-block">Voltar</p>
      </button>
    </div>
  );
}
