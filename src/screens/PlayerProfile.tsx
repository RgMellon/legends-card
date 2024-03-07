import Chart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function PlayerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const series = [
    {
      name: 'Nota',
      data: [89, 60, 60, 80, 90, 60, 80],
    },
  ];
  const options = {
    chart: {
      id: 'simple-bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
      categories: [
        `Sem-1`,
        `Sem-2`,
        `Sem-3`,
        `Sem-4`,
        'Sem-5',
        'Sem-6',
        'Sem-7',
      ],
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: (value: number) => Math.round(value).toString(),
      },
    },
  };

  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="w-full flex p-8 mt-2 rounded-md bg-purple-200">
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

          <p className="inline-block"> Voltar</p>
        </button>
      </div>

      <div className="grid sm:grid-cols-12 gap-5">
        <aside className="col-span-3 flex justify-start h-[400px]">
          <div className="mt-5 w-[100%] flex flex-col items-center p-10 rounded-md bg-purple-200">
            <img
              className="object-cover w-[130px] h-[130px] rounded-full ring-2 "
              src="https://pbs.twimg.com/media/E6Qvps4WUAExBZt.jpg:large"
              alt="player-icon"
            />

            <div className="mt-5 flex items-center">
              <img
                className="object-cover inline-block w-5 h-5 rounded-full"
                src="https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-top.png"
                alt=""
              />
              <p className="ml-3 text-lg font-bold">Robo {id}</p>
            </div>

            <section className="w-full mt-10">
              <div className="flex justify-between items-center">
                <p className="text-md">Min 40 </p>

                <p className="text-lg bol text-yellow">Média 50 </p>

                <p className="text-md">Max 80</p>
              </div>
            </section>
          </div>
        </aside>

        <div className="col-span-9">
          <div className="shadow-sm w-full rounded-md p-5 bg-purple-200 mt-5">
            <h2 className="font-bold text-lg">Dados do Jogador</h2>
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
  );
}
