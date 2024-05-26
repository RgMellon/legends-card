import {
  PiHeadsetLight,
  PiArrowArcRight,
  PiUserCircleMinus,
  PiPlusCircle,
} from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { players } from '../mock/player';
import { RightTemplateModal } from '../components/RightTemplateModal';

import { Alert } from '../components/Alert';
import { useState } from 'react';
import { ChangePlayerOfTeam } from '../components/ChangePlayerOfTeam';
import { CreatePlayer } from '../components/CreatePlayer';

export function ManagePlayerTemplate() {
  const navigate = useNavigate();

  const [isOpenModalReplacePlayer, setIsOpenModalReplacePlayer] =
    useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isOpenCreateReplacePlayer, setIsOpenCreateReplacePlayer] =
    useState(false);

  function handleToggleModalReplacePlayer() {
    setIsOpenModalReplacePlayer((old) => !old);
  }

  function handleToggleModalCreatePlayer() {
    setIsOpenCreateReplacePlayer((old) => !old);
  }

  function onConfirmAlert() {
    setShowAlert(false);
  }

  return (
    <section className="mx-auto max-w-screen-2xl md:max-w-screen-xl">
      <header className="bg-purple-200 mt-8 flex items-center p-4 rounded-md justify-between">
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

        <div className="flex items-center">
          <h1 className="mr-10 font-medium text-lg">Gerenciar Jogador</h1>
          <div
            className={`
            rounded 
            bg-green
            w-12 h-12 
            opacity-95 
            justify-center
            flex
            items-center
            `}
          >
            <PiHeadsetLight size={24} />
          </div>
        </div>
      </header>

      <section className="mt-8">
        <div className="w-full mt-8 flex justify-end">
          <button
            className="text-white py-3 px-3 rounded flex items-center bg-green"
            title="Adicionar novo jogador"
            onClick={handleToggleModalCreatePlayer}
          >
            <PiPlusCircle size={'18px'} color="#fff" />
            <p className="ml-4">Adicionar jogador</p>
          </button>{' '}
        </div>

        <table className="table-auto w-full mt-8">
          <thead className="bg-purple-200">
            <tr>
              <th className="text-left p-4 w-[25%]">Jogador</th>
              <th className="text-left w-[25%]">Time</th>
              <th className="text-left w-[25%]">Posição</th>
              <th className="text-left w-[25%]">Ações</th>
            </tr>
          </thead>

          <div className="h-2"></div>

          <tbody className="bg-purple-200">
            {players.map((player, index) => (
              <tr key={index}>
                <td className="flex items-center p-4 w-[25%]">
                  <img
                    className="object-cover w-8 h-8 rounded-full ring-1"
                    src={player.photo}
                    alt="player-icon"
                  />
                  <p className="ml-4">{player.nickName}</p>
                </td>
                <td className="text-left w-[25%]">Loud</td>
                <td className="text-left w-[25%]">{player.role}</td>
                <td className="text-left w-[25%]">
                  <button
                    className="px-3"
                    title="Trocar jogador de time"
                    onClick={handleToggleModalReplacePlayer}
                  >
                    <PiArrowArcRight size={'18px'} color="#1fb6ff" />
                  </button>

                  <button
                    className="text-white py-1 px-3 rounded"
                    title="Desativar jogador"
                    onClick={() => {
                      setShowAlert(true);
                    }}
                  >
                    <PiUserCircleMinus size={'18px'} color="#ff7849" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <RightTemplateModal
        isOpen={isOpenModalReplacePlayer}
        handleToggle={handleToggleModalReplacePlayer}
      >
        <ChangePlayerOfTeam />
      </RightTemplateModal>

      <RightTemplateModal
        isOpen={isOpenCreateReplacePlayer}
        handleToggle={handleToggleModalCreatePlayer}
      >
        <CreatePlayer />
      </RightTemplateModal>

      {showAlert && (
        <Alert
          title="Desativar jogador"
          alertMessage="Você tem certeza que deseja desativar este player?"
          onCancel={() => {
            setShowAlert(false);
          }}
          onConfirm={onConfirmAlert}
        />
      )}
    </section>
  );
}
