import { useStages } from '../hooks/useFetchStage';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { Modal } from '../components/Modal';
import { useHomeViewModel } from '../hooks/viewModel/useHomeViewModel';
import { useRef } from 'react';
import { useFetchHome } from '../hooks/useFetchHome';
import { BestPlayerList } from '../components/BestPlayerList';
import { PlayersByTeamList } from '../components/PlayersByTeamList';
import { InputThatTriggerModal } from '../components/InputThatTriggerModal';
import { SelectStage } from '../components/SelectStage';

type HomeTemplateProps = {
  onClickPlayer: (playerId: string) => void;
};

export function HomeTemplate({ onClickPlayer }: HomeTemplateProps) {
  const { stages, handleSelectHomeStage, selectedHomeStage } = useStages();
  const { homeData, isLoading } = useFetchHome();
  const { showModal, handleToggle, handleSearchPlayer } = useHomeViewModel();

  const week = stages.find((stage) => stage.id === selectedHomeStage);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      if (inputRef.current?.value) {
        const response = await handleSearchPlayer(inputRef.current?.value);
        if (response?.id) onClickPlayer(response?.id);
      }
    }
  };

  return isLoading ? (
    <h1> Carregando </h1>
  ) : (
    !isLoading && (
      <>
        <div className="mx-auto max-w-screen-2xl">
          <InputThatTriggerModal handleToggle={handleToggle} />

          <div className="shadow-sm h-full w-full  flex items-center rounded-md p-4 bg-purple-200 mt-4">
            <h2 className="font-bold text-lg">🐐 Goats da semana</h2>

            <SelectStage
              handleSelectHomeStage={handleSelectHomeStage}
              selectedHomeStage={selectedHomeStage}
              stages={stages}
            />
          </div>

          <BestPlayerList bestPlayers={homeData.bestPlayers} />

          <PlayersByTeamList
            week={week?.slug || ''}
            playersByTeams={homeData.playersByTeams}
            onClickPlayer={onClickPlayer}
          />
        </div>

        {showModal && (
          <Modal handleClose={handleToggle}>
            <div>
              <input
                autoFocus
                className="z-50 w-full mt-10 p-4 pl-12 rounded-md bg-purple-100 border-solid border-3 outline-none"
                type="search"
                placeholder="Pesquisar um jogador"
                onKeyPress={handleKeyPress}
                ref={inputRef}
              />
              <div className="absolute top-[57%] left-0 flex pl-3 pointer-events-none 1">
                <PiMagnifyingGlass size={24} className="text-gray-500" />{' '}
              </div>
            </div>
          </Modal>
        )}
      </>
    )
  );
}
