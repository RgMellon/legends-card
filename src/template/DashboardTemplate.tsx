import { PiNote, PiCalendarPlusThin } from 'react-icons/pi';
import { MenuCard } from '../components/MenuCard';

export function DashboardTemplate() {
  return (
    <section className="mx-auto max-w-screen-2xl ">
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-200 mt-4">
        <h2 className="font-bold text-lg">O que gostaria de fazer ?</h2>
      </div>

      <div className="grid  gap-4 mt-4 grid-cols-3">
        <MenuCard
          color="bg-orange"
          title="Dar nota aos jogadores"
          subtitle="Aqui voce consegue dar notas aos jogadores"
          action={() => {
            alert('oi');
          }}
          icon={<PiNote size={24} />}
        />

        <MenuCard
          color="bg-yellow"
          title="Criar semana / Rodada"
          subtitle="Crie a semana para cadastrar o usuário"
          action={() => {
            alert('oi');
          }}
          icon={<PiCalendarPlusThin size={24} />}
        />
      </div>
    </section>
  );
}
