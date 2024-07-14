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

import { PiHouse, PiShootingStar } from 'react-icons/pi';
import { Link } from 'react-router-dom';

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
      <main className="relative">
        <aside className="w-[300px] h-[100vh] bg-purple-200 shadow-sm fixed p-6">
          <ul className="mt-6">
            <Link
              to="/"
              className="mt-4 p-2 flex items-center hover:bg-purple-100 hover:rounded-md  h-10 br-10"
            >
              <PiHouse />
              <span className="ml-2">Home</span>
            </Link>

            <Link
              to="/best/players"
              className="mt-4 p-2 flex items-center hover:bg-purple-100 hover:rounded-md  h-10 br-10"
            >
              <PiShootingStar />
              <span className="ml-2"> Melhores Jogadores </span>
            </Link>
          </ul>
        </aside>

        <div className="mx-auto max-w-screen-2xl md:max-w-screen-xl md:ml-[340px]">
          <section className="flex flex-row">
            <div className="w-8/12 mr-10">
              <InputThatTriggerModal handleToggle={handleToggle} />
            </div>

            <div className="w-4/12 mt-6">
              <SelectStage
                handleSelectHomeStage={handleSelectHomeStage}
                selectedHomeStage={selectedHomeStage}
                stages={stages}
              />
            </div>
          </section>

          {homeData.playersByTeams?.length == 0 ? (
            <section className="w-full h-svh flex flex-col justify-center items-center  ">
              <div
                className="bg-yellow rounded-full rotate-45"
                style={{ backgroundColor: 'rgba(54, 52, 71, 0.3)' }}
              >
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/da4be2i-f75637af-3bef-4f9f-9a88-d39c216497cc.png/v1/fill/w_933,h_717/_league_of_legends__blood_moon_kennen__render__by_popokupingupop90_da4be2i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE3IiwicGF0aCI6IlwvZlwvZDA5OWQzMTYtOThjZi00MDk1LWEyZjktMzJjY2E0MjE5YmFhXC9kYTRiZTJpLWY3NTYzN2FmLTNiZWYtNGY5Zi05YTg4LWQzOWMyMTY0OTdjYy5wbmciLCJ3aWR0aCI6Ijw9OTMzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.T1lVG4L4fPVFF3RwDbbsEg7GnRWwKZwLUEor4ZK2HE0"
                  alt=""
                  className="w-96 object-contain -rotate-45"
                />
              </div>
              <h4 className="mt-20 font-bold text-1xl">
                Jogadores ainda não cadastrados nessa semana
              </h4>
            </section>
          ) : (
            <>
              <div
                className="shadow-sm flex items-center rounded-md  mt-8 justify-between "
                style={{ backgroundColor: 'rgba(54, 52, 71, 0.8)' }}
              >
                <h2 className="font-bold text-2xl ml-8">
                  Melhores Jogadores da semana
                </h2>

                <div className="">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/da3sj5y-114e591e-bd46-48e8-bb6d-cc7fdc0b344a.png/v1/fill/w_1024,h_718/_league_of_legends__classic_azir__render__by_popokupingupop90_da3sj5y-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvZDA5OWQzMTYtOThjZi00MDk1LWEyZjktMzJjY2E0MjE5YmFhXC9kYTNzajV5LTExNGU1OTFlLWJkNDYtNDhlOC1iYjZkLWNjN2ZkYzBiMzQ0YS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ff_bTd1gY1R4a-bV7DSDJFdbgxaAFHI4cYKg8SlnjnY"
                    alt=""
                    className="w-56 right-0"
                  />
                </div>
              </div>

              <BestPlayerList bestPlayers={homeData.bestPlayers} />

              <PlayersByTeamList
                week={week?.slug || ''}
                playersByTeams={homeData.playersByTeams}
                onClickPlayer={onClickPlayer}
              />
            </>
          )}
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
      </main>
    )
  );
}
