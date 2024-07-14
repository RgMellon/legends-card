import { useState } from 'react';
// import { PiArrowArcRight } from 'react-icons/pi';
import { Team } from '../domain/dtos/response/Team';
import { PlayerRequestProps } from '../domain/dtos/request/PlayerRequestDto';
import toast from 'react-hot-toast';
import { Button } from './Button';

type Props = {
  allTeams: Team[];
  isLoadingTeam: boolean;
  handleCreatePlayer: (player: PlayerRequestProps) => void;
};

export function CreatePlayer({
  allTeams,
  isLoadingTeam,
  handleCreatePlayer,
}: Props) {
  const [photo, setPhoto] = useState('');
  const [loadButton, setLoadButton] = useState(false);
  const [player, setPlayer] = useState({
    teamId: '',
    role: '',
    nickName: '',
    photo: '',
    nationality: 'BR',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  function handleAddPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    setPhoto(event.target.value);

    handleInputChange(event);
  }

  function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { teamId, role, nickName, photo, nationality } = player;

    if (!teamId || !role || !nickName || !photo || !nationality) {
      toast.error('Preencha todos os dados corretamente');
      return;
    }

    setLoadButton(true);

    handleCreatePlayer(player);
  }

  return (
    <section className="flex flex-col justify-center">
      <h1 className="font-bold text-lg">Cadastrar novo jogador</h1>
      <hr className="mt-4 bg-yellow mb-4" />

      <form onSubmit={handleCreate}>
        <div className="mt-8 w-full">
          <p>Insira a url de uma imagem</p>

          <div className="flex justify-between items-center">
            <input
              type="url"
              name="photo"
              id="photo"
              className="rounded-md 
                      py-3 pl-4
                      w-full
                      bg-purple-200
                      "
              placeholder="Insira uma url valida de alguma foto do player"
              onChange={handleAddPhoto}
            />

            {!!photo && photo.includes('https://') && (
              <img
                className="object-cover w-16 h-16 rounded-full ring-1 ml-8 mr-4"
                src={photo}
                alt="player-icon"
              />
            )}
          </div>
        </div>

        <div className="mt-8 w-full">
          <p>Nick do jogador</p>
          <input
            type="text"
            name="nickName"
            id="nickName"
            className="rounded-md 
                      py-3 pl-4
                      w-full
                      bg-purple-200
                      "
            placeholder="NickName"
            onChange={handleInputChange}
          />
        </div>

        {!isLoadingTeam && (
          <div className="mt-8 w-full">
            <p>Escolha o time do jogador</p>

            <select
              name="teamId"
              id="teamId"
              className="rounded-md 
           py-3 pl-4
           w-full
           bg-purple-200
           text-gray-600
           "
              onChange={handleInputChange}
            >
              <option defaultChecked value={''}>
                {' '}
                ----{' '}
              </option>
              {allTeams?.length > 0 &&
                allTeams.map((team) => (
                  <option value={team.id}>{team.name}</option>
                ))}
            </select>
          </div>
        )}

        <div className="mt-8 w-full">
          <p>Escolha a posição do jogador</p>

          <select
            name="role"
            id="role"
            onChange={handleInputChange}
            className="rounded-md 
           py-3 pl-4
           w-full
           bg-purple-200
           text-gray-600
           "
          >
            <option defaultChecked value="">
              ----
            </option>
            <option value="MID">MID</option>
            <option value="ADC">ADC</option>
            <option value="SUP">SUP</option>
            <option value="JG">JG</option>
            <option value="TOP">TOP</option>
          </select>
        </div>

        <Button
          title="Criar jogador"
          loading={loadButton}
          type="submit"
          className="w-full bg-green h-11 mt-8 rounded-md"
        />
      </form>
    </section>
  );
}
