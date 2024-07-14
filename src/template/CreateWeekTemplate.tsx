import { useNavigate } from 'react-router-dom';

import { PiCalendarPlusThin } from 'react-icons/pi';
import { Button } from '../components/Button';
import { useState } from 'react';
import { CreateWeekDto } from '../domain/dtos/request/CreateWeekDto';
import { useCreateWeekViewModel } from '../hooks/viewModel/useCreateWeekViewModel';
import toast from 'react-hot-toast';

export function CreateWeekTemplate() {
  const navigate = useNavigate();

  const { handleCreate } = useCreateWeekViewModel();
  const [loadButton, setLoadButton] = useState(false);

  const [week, setWeek] = useState<CreateWeekDto>({
    slug: '',
    stageInitDate: '',
    stageEndDate: '',
  });

  async function handleCreateWeek(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { slug, stageEndDate, stageInitDate } = week;

    if (!slug || !stageEndDate || !stageInitDate) {
      toast.error('Preencha todos os dados corretamente');
      return;
    }

    try {
      setLoadButton(true);
      await handleCreate(week);
      setWeek({
        slug: '',
        stageInitDate: '',
        stageEndDate: '',
      });
      setLoadButton(false);
    } catch (err) {
      setLoadButton(false);
    }
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setWeek((week) => ({
      ...week,
      [name]: value,
    }));
  };

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
          <h1 className="mr-10 font-medium text-lg">Criar a semana do jogo</h1>
          <div
            className={`
            rounded 
            bg-yellow
            w-12 h-12 
            opacity-95 
            justify-center
            flex
            items-center
            `}
          >
            <PiCalendarPlusThin size={24} />
          </div>
        </div>
      </header>

      <section className="bg-purple-200 rounded-md p-10 mt-8">
        <form onSubmit={handleCreateWeek}>
          <div className="mt-8 w-full">
            <p>Nome da semana</p>
            <input
              type="text"
              name="slug"
              id="slug"
              className="rounded-md 
                      py-3 pl-4
                      w-full
                      bg-purple-100
                      "
              placeholder="Digite o nome da semana exemplo : Semana 9"
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-8 w-full">
            <p>Data de inicio da semana</p>
            <input
              type="date"
              name="stageInitDate"
              id="stageInitDate"
              className="rounded-md 
                      py-3 pl-4
                      w-full
                      bg-purple-100
                      "
              placeholder="Digite o nome da semana exemplo : Semana 9"
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-8 w-full">
            <p>Data de fim da semana</p>
            <input
              type="date"
              name="stageEndDate"
              id="stageEndDate"
              className="rounded-md 
                      py-3 pl-4
                      w-full
                      bg-purple-100
                      "
              placeholder="Digite o nome da semana exemplo : Semana 9"
              onChange={handleInputChange}
            />
          </div>

          <Button
            title="Criar semana"
            loading={loadButton}
            type="submit"
            className="w-full bg-green h-11 mt-8 rounded-md"
          />
        </form>
      </section>
    </section>
  );
}
