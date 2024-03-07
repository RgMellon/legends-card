import { Card } from '../components/Card';
import { PlayerByTeam } from '../components/PlayerByTeam';

type HomeTemplateProps = {
  title: string;
  subTitle: string;
};

export function HomeTemplate({ title, subTitle }: HomeTemplateProps) {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      <div className="mt-4">
        <div className="grid gap-4 grid-cols-4 grid-rows-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">{subTitle}</h2>
      </div>

      <div className="grid gap-4 grid-cols-4 mt-4">
        <PlayerByTeam />
        <PlayerByTeam />
        <PlayerByTeam />
      </div>
    </div>
  );
}
