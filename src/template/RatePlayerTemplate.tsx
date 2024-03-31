import { useRef } from 'react';

import { RateProps } from '../domain/usecases/RegisterRate';
import { Button } from '../components/Button';
import { useStages } from '../hooks/useFetchStage';
import toast from 'react-hot-toast';
import { useModal } from '../hooks/useModal';
import { Player } from '../domain/usecases/FetchAllPlayers';

type RatePlayerTemplateProps = {
  players: Player[];
  onClick: (rate: RateProps) => void;
  loadRegister?: boolean;
};

let currentPlayerId: string;
let currentPlayerName: string;

export function RatePlayerTemplate({
  players,
  onClick,
  loadRegister = false,
}: RatePlayerTemplateProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { stages } = useStages();
  const { isOpen, handleToggle } = useModal();

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

  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">Nota dos jogadores</h2>
      </div>

      <div className={`mt-4 ${isOpen && 'opacity-5'}  bg-purple-200`}>
        <div className="p-10">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-start">Jogador</th>
                <th className="text-start">Posição</th>
                <th className="text-start">Time</th>
                <th></th>
                <th className="text-center">Ja tem nota essa semana?</th>
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
                  <td>✍🏻</td>
                  <td className="text-center">
                    {!!player.rates.find(
                      (i) => i.stageId === stages[stages.length - 1].id
                    ) ? (
                      <span>✅</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
