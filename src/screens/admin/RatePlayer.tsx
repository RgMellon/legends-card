import { useQuery } from 'react-query';
import { RatePlayerTemplate } from '../../template/RatePlayerTemplate';
import { RateProps } from '../../domain/usecases/RegisterRate';
import { useRegisterRate } from '../../hooks/useRegisterRate';
import toast from 'react-hot-toast';
import { useFetchAllPlayers } from '../../hooks/useFetchAllPlayers';

export function RatePlayer() {
  const { handleRegisterRate, loadRegister } = useRegisterRate();
  const { fetchAllPlayers } = useFetchAllPlayers();
  async function getPlayerByTeams() {
    try {
      const response = await fetchAllPlayers();
      return response;
    } catch (err) {
      toast.error('Ops, algo de errado aconteceu ao obter os jogadores =/');
    }
  }

  const { data, isLoading } = useQuery(
    'bestPlayersAndByTeam',
    getPlayerByTeams
  );

  function handleRate(rate: RateProps) {
    handleRegisterRate(rate);
  }

  return (
    !isLoading && (
      <RatePlayerTemplate
        loadRegister={loadRegister}
        players={data!}
        onClick={handleRate}
      />
    )
  );
}
