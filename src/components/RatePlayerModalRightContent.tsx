import { useSelectedPlayer } from '../hooks/useSelectedPlayer';
import Chart from 'react-apexcharts';
import { buildOptions } from '../utils/chart/options';

export function RatePlayerModalRightContent() {
  const { selectedPlayer } = useSelectedPlayer();

  const options = buildOptions(
    selectedPlayer?.rates?.map((i) => i.stage.slug) || []
  );

  const series = [
    {
      name: 'Nota',
      data: selectedPlayer?.rates?.map((rate) => rate.rate),
    },
  ];

  return (
    <main className="w-full h-full relative overflow-scroll">
      <div
        className="w-full h-48 flex justify-center items-center rounded-md"
        style={{ backgroundColor: 'rgba(54, 52, 71, 0.8)' }}
      >
        <div className="flex flex-col items-center">
          <img
            src={selectedPlayer.photo}
            className="object-cover w-24 h-24  rounded-full ring-2"
          />
          <p className="font-bold mt-4">{selectedPlayer.nickName}</p>
        </div>
      </div>

      <table className="table-auto w-full mt-20">
        <thead>
          <tr>
            <th className="text-start">Semana</th>
            <th className="text-start">Nota</th>
          </tr>
        </thead>
        <tbody>
          {selectedPlayer?.rates?.map((currentRate, index) => (
            <tr
              className={`h-16 ${index % 2 == 0 && `bg-purple-200 rounded-sm`}`}
            >
              <td>{currentRate.stage.slug}</td>
              <td className="">{currentRate.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-20 w-full h-50 bg-purple-200 rounded-md">
        <Chart options={options} type="bar" series={series} />
      </div>
    </main>
  );
}
