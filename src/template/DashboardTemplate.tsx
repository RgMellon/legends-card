import { PiNote, PiCalendarPlusThin, PiHeadsetLight } from 'react-icons/pi';
import { MenuCard } from '../components/MenuCard';
import { useNavigate } from 'react-router-dom';

export function DashboardTemplate() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-screen-2xl md:max-w-screen-xl">
      <div className="shadow-sm h-full w-full rounded-md p-5 bg-purple-100 mt-4">
        <h2 className="font-bold text-lg">O que gostaria de fazer ?</h2>
      </div>

      <div className="grid  gap-4 mt-4 grid-cols-3">
        <MenuCard
          color="bg-orange"
          title="Dar nota aos jogadores"
          subtitle="Aqui voce consegue dar notas aos jogadores"
          action={() => {
            navigate('rate/player');
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

        <MenuCard
          color="bg-green"
          title="Gerenciar jogador"
          subtitle="Aqui voce pode Criar, Trocar jogador de time ou desabilitar um jogador"
          action={() => {
            navigate('/admin/manage/player');
          }}
          icon={<PiHeadsetLight size={24} />}
        />
      </div>
    </section>
  );
}
