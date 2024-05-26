import { useNavigate } from 'react-router-dom';
import { Banner } from '../components/Banner';
import { Card } from '../components/Card';

import { BestPlayersAllStageResponseDTO } from '../domain/dtos/response/BestPlayersAllStageResponseDTO';
import { useBestPlayersViewModel } from '../hooks/viewModel/useBestPlayersViewModel';

const position = {
  ADC: 'icon-position-bottom',
  MID: 'icon-position-middle',
  JG: 'icon-position-jungle',
  TOP: 'icon-position-top',
  SUP: 'icon-position-utility',
};

export function BestPlayersTemplate() {
  const navigate = useNavigate();
  const { players: roles, isLoading } = useBestPlayersViewModel();

  return (
    !isLoading && (
      <section className="mx-auto max-w-screen-2xl md:max-w-screen-xl">
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

        <Banner
          title="Melhores jogadores"
          subtitle="Nota de todos jogadores de todas as temporadas e splits"
          img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/da3lq5u-e47160d0-02a1-4e9d-a45b-23e8e4439bff.png/v1/fill/w_1024,h_605/_league_of_legends__classic_ezreal_ver__3__render__by_popokupingupop90_da3lq5u-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA1IiwicGF0aCI6IlwvZlwvZDA5OWQzMTYtOThjZi00MDk1LWEyZjktMzJjY2E0MjE5YmFhXC9kYTNscTV1LWU0NzE2MGQwLTAyYTEtNGU5ZC1hNDViLTIzZThlNDQzOWJmZi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sTWhKuP_QF80-6BvsDM35qX-I7pfMxS_5OcHUtAO-dM"
        />

        {roles.map(({ role, players }: BestPlayersAllStageResponseDTO) => (
          <>
            <div
              className="shadow-sm flex items-center rounded-md p-2 mt-8 justify-between mb-2"
              style={{ background: 'rgba(223, 177, 96, 0.1)' }}
            >
              <div className="ml-4">
                <h2 className="font-bold text ">{role}</h2>
              </div>

              <div className="">
                <img
                  src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/${position[role]}.png`}
                  alt={'Top line img'}
                  className="w-14 right-0"
                />
              </div>
            </div>

            <div className={` grid gap-4 grid-cols-4 grid-rows-2`}>
              {players.map((currentPlayer) => (
                <Card
                  rate={currentPlayer.totalRate}
                  id={currentPlayer.id}
                  nickName={currentPlayer.nickName}
                  photo={currentPlayer.photo}
                  role={currentPlayer.role}
                />
              ))}
            </div>
          </>
        ))}
      </section>
    )
  );
}
