import { useState } from 'react';
import { PiArrowArcRight } from 'react-icons/pi';

export function CreatePlayer() {
  const [photo, setPhoto] = useState('');

  function handleAddPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    setPhoto(event.target.value);
  }

  return (
    <section className="flex flex-col justify-center">
      <h1 className="font-bold text-lg">Cadastrar novo jogador</h1>
      <hr className="mt-4 bg-yellow mb-4" />

      <div className="mt-8 w-full">
        <p>Insira a url de uma imagem</p>

        <div className="flex justify-between items-center">
          <input
            type="url"
            name="rate"
            id="rate"
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
          onChange={handleAddPhoto}
        />
      </div>

      <div className="mt-8 w-full">
        <p>Escolha o time do jogador</p>

        <select
          name="team"
          id="team"
          className="rounded-md 
           py-3 pl-4
           w-full
           bg-purple-200
           text-gray-600
           "
        >
          <option value="loud">Loud</option>
          <option value="team2">Team 2</option>
          <option value="team3">Team 3</option>
        </select>
      </div>

      <div className="mt-8 w-full">
        <p>Escolha a posição do jogador</p>

        <select
          name="team"
          id="team"
          className="rounded-md 
           py-3 pl-4
           w-full
           bg-purple-200
           text-gray-600
           "
        >
          <option value="loud">TOP</option>
          <option value="team2">MID</option>
          <option value="team3">ADC</option>
          <option value="team3">SUP</option>
          <option value="team3">JG</option>
        </select>
      </div>

      <button className="w-full rounded-md flex justify-center items-center mt-8 bg-blue p-2">
        <PiArrowArcRight />
        <p className="ml-4"> Adicionar Player </p>
      </button>
    </section>
  );
}
