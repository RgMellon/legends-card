import { useRef, useState } from 'react';

import { RateProps } from '../domain/usecases/RegisterRate';
import { Button } from '../components/Button';
import { useStages } from '../hooks/useFetchStage';
import toast from 'react-hot-toast';
import { useModal } from '../hooks/useModal';
import { Player } from '../domain/usecases/FetchAllPlayers';
import { PlayerTable } from '../components/PlayerTable';

type RatePlayerTemplateProps = {
  players: Player[];
  onClick: (rate: RateProps) => void;
  loadRegister?: boolean;
  handleChangeGroupBy: (group: string) => void;
};

let currentPlayerId: string;
let currentPlayerName: string;

export function RatePlayerTemplate({
  players,
  onClick,
  loadRegister = false,
  handleChangeGroupBy,
}: RatePlayerTemplateProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { stages } = useStages();
  const { isOpen, handleToggle } = useModal();

  const [currentWeek, setCurrentWeek] = useState(stages[stages.length - 1].id);

  function handlePlayerCallback(playerId: string, playerName: string) {
    currentPlayerId = playerId;
    currentPlayerName = playerName;
    handleToggle();
  }

  function handleRegisterRate(stageId: string) {
    if (!currentPlayerId || !inputRef?.current?.value) {
      toast.error('Voce deve informar uma nota e o player antes de salvar');
      return;
    }

    onClick({
      playerId: currentPlayerId,
      rate: (inputRef?.current && String(inputRef.current.value)) || '0',
      stageId,
    });
  }

  function handleSelectWeek(week: string) {
    setCurrentWeek(week);
  }

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">Nota dos jogadores</h2>
      </div>

      <section className={`mt-4 ${isOpen && 'opacity-5'}  bg-purple-200`}>
        <div className="p-10">
          <section className="flex justify-between">
            <div className="flex items-center mb-6">
              <p className="mr-5">Ordenar por </p>{' '}
              <select
                onChange={(event) => {
                  handleChangeGroupBy(event.target.value);
                }}
                id="stage"
                name="stage"
                className="mt-4 mb-4 rounded-md bg-transparent py-3 pl-2 pr-3 text-gray-500"
              >
                <option selected={true} value={'role'}>
                  Posição
                </option>
                <option value={'team'}>Time</option>
              </select>
            </div>

            <div className="flex items-center mb-6">
              <p className="mr-5">Semana </p>{' '}
              <select
                onChange={(event) => {
                  handleSelectWeek(event.target.value);
                }}
                id="stage"
                name="stage"
                className="mt-4 mb-4 rounded-md bg-transparent py-3 pl-2 pr-3 text-gray-500"
              >
                {stages.map((stage) => (
                  <option
                    selected={stages[stages.length - 1].id === stage.id}
                    key={stage.id}
                    value={stage.id}
                  >
                    {stage.slug}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <PlayerTable
            stageId={currentWeek}
            players={players}
            handlePlayerCallback={handlePlayerCallback}
          />
        </div>
      </section>

      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none w-100px">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0  relative flex flex-col w-full bg-white outline-none  rounded-md p-5 bg-purple-200">
                <div className="flex items-start justify-between p-5  border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Nota para o player {currentPlayerName}
                  </h3>
                </div>

                <select
                  id="stage"
                  name="stage"
                  className="mt-4 mb-4 rounded-md bg-transparent py-3 pl-2 pr-3 text-gray-500"
                >
                  {stages.map((stage, index) => (
                    <option selected={index === stages.length - 1}>
                      {stage.slug}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="rate"
                  id="rate"
                  className="rounded-md 
                            py-3 pl-4
                            "
                  placeholder="Dar nota"
                  ref={inputRef}
                />

                <div className="absolute inset-y-0 right-0 flex items-center h-50">
                  <label htmlFor="stage" className="sr-only">
                    Semana
                  </label>
                </div>

                <div className="mt-4 flex items-center justify-end p-6 border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleToggle}
                  >
                    Close
                  </button>
                  <Button
                    title="Salvar"
                    // Fazer um teste recuperando aqui do useRegisterRate, creio que vai
                    //falhar pois ele n recupera o state entre pages
                    loading={loadRegister}
                    onClick={() => {
                      // Sempre dar nota na ultima rodada nessa v1;
                      handleRegisterRate(stages[stages.length - 1].id);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
