import Chart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFetchPlayerProfile } from '../hooks/useFetchPlayerProfile';
import { useQuery } from 'react-query';
import { PlayerProfileWithChartValues } from '../domain/usecases/FetchPlayerProfile';
import { buildOptions } from '../utils/chart/options';

export function PlayerProfile() {
  const { fetchPlayerProfile } = useFetchPlayerProfile();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<PlayerProfileWithChartValues>(
    'fetchPlayerProfile',
    () => fetchPlayerProfile(id!)
  );

  const series = [
    {
      name: 'Nota',
      data: data?.allRates || [],
    },
  ];

  const options = buildOptions(data?.categorieSlug || []);

  const position = {
    ADC: 'icon-position-bottom',
    MID: 'icon-position-middle',
    JG: 'icon-position-jungle',
    TOP: 'icon-position-top',
    SUP: 'icon-position-utility',
  };

  return (
    !isLoading && (
      <section className="mx-auto max-w-screen-2xl">
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

        <div className="grid sm:grid-cols-12 gap-5">
          <aside className="col-span-3 flex justify-start h-[400px]">
            <div className="mt-5 w-[100%] flex flex-col items-center p-10 rounded-md bg-purple-200">
              <img
                className="object-cover w-[130px] h-[130px] rounded-full ring-2 "
                src={data?.photo}
                alt="player-icon"
              />

              <div className="mt-5 flex items-center">
                <img
                  className="object-cover inline-block w-5 h-5 rounded-full"
                  src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/${
                    position[data?.role]
                  }.png`}
                  alt=""
                />

                <p className="ml-3 text-lg font-bold">{data?.nickName}</p>
              </div>

              <section className="w-full mt-10">
                <div className="flex justify-between items-center">
                  <p className="text-md">Min {data?.minRate} </p>

                  <p className="text-lg text-yellow font-bold">
                    Média {data?.averageRate.toFixed(1)}{' '}
                  </p>

                  <p className="text-md">Max {data?.maxRate}</p>
                </div>
              </section>
            </div>
          </aside>

          <div className="col-span-9">
            <div
              className="shadow-sm flex items-center rounded-md  mt-4 justify-between "
              style={{ background: 'rgba(223, 177, 96, 0.5)' }}
            >
              <h2 className="font-bold text-4xl ml-8">Dados do jogador</h2>

              <div className="">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/da3sk3r-42727b22-11ec-4631-ac37-f374291d4752.png/v1/fill/w_1002,h_717/_league_of_legends__classic_blitzcrank__render__by_popokupingupop90_da3sk3r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE3IiwicGF0aCI6IlwvZlwvZDA5OWQzMTYtOThjZi00MDk1LWEyZjktMzJjY2E0MjE5YmFhXC9kYTNzazNyLTQyNzI3YjIyLTExZWMtNDYzMS1hYzM3LWYzNzQyOTFkNDc1Mi5wbmciLCJ3aWR0aCI6Ijw9MTAwMiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RymoiGV5EwPgkT55ZqPOQfsWoZxl_PQQTCHpuOc2Pk0"
                  alt=""
                  className="w-80 right-0"
                />
              </div>
            </div>

            <div className="shadow-sm w-full rounded-md p-5 bg-purple-200 mt-3">
              <div className="w-100% mt-1">
                <Chart
                  options={options}
                  type="area"
                  series={series}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
