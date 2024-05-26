import { PiArrowArcRight } from 'react-icons/pi';

export function ChangePlayerOfTeam() {
  return (
    <section className="flex flex-col justify-center">
      <h1 className="font-bold text-lg">
        Deseja mover o jogado para qual time?
      </h1>

      <div className="flex items-center mt-8">
        <img
          className="object-cover w-8 h-8 rounded-full ring-1"
          src={''}
          alt="player-icon"
        />
        <p className="ml-4">Robo</p>
      </div>

      <div className="mt-8 w-full">
        <p>Time atual </p>
        <input
          disabled
          type="text"
          name="rate"
          id="rate"
          className="rounded-md 
                      py-3 pl-4
                      w-full
                      "
          placeholder="Loud"
          // ref={inputRef}
        />
      </div>

      <div className="mt-8 w-full">
        <p>Escolha o novo time do jogador</p>

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

      <button className="w-full rounded-md flex justify-center items-center mt-8 bg-blue p-2">
        <PiArrowArcRight />
        <p className="ml-4"> Realizar modificação </p>
      </button>
    </section>
  );
}
