import { useRegisterRate } from '../useRegisterRate';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { useFetchAllPlayers } from '../useFetchAllPlayers';
import { RateProps } from '../../domain/usecases/RegisterRate';
import { useEffect, useState } from 'react';
import { useStages } from '../useFetchStage';
import { Player } from '../../domain/usecases/FetchAllPlayers';

export function useRatePlayerViewModel(group: string = 'role') {
  const { onLoadStage, selectedStage } = useStages();

  const { handleRegisterRate, loadRegister } = useRegisterRate();
  const { fetchAllPlayers } = useFetchAllPlayers();

  const [players, setPlayers] = useState<Player[]>([]);
  const [formatedPlayers, setFormatedPlayers] = useState<Player[]>([]);

  const { isLoading } = useQuery(
    ['fetchAllPlayers', { group }],
    () => onLoad(group),
    {
      refetchOnWindowFocus: false,
    }
  );

  async function onLoad(group: string) {
    await onLoadStage();
    const response = await getPlayers(group);

    setPlayers(response!);
  }

  useEffect(() => {
    const result = players?.map((player) => ({
      ...player,
      hasRateInThisWeek: !!player.rates.find(
        (currentRate) => currentRate.stageId === selectedStage
      ),
    }));

    setFormatedPlayers(result);
  }, [players, selectedStage]);

  async function getPlayers(group: string) {
    try {
      return await fetchAllPlayers(group);
    } catch (err) {
      toast.error('Ops, algo de errado aconteceu ao obter os jogadores =/');
    }
  }

  async function onRegisterRate({ playerId, rate, stageId }: RateProps) {
    if (!playerId || !rate) {
      toast.error('Voce deve informar uma nota e o player antes de salvar');
      return;
    }

    try {
      await handleRegisterRate({
        playerId,
        rate,
        stageId,
      });

      setFormatedPlayers((oldValue) =>
        oldValue?.map((player) => ({
          ...player,
          hasRateInThisWeek:
            playerId === player.id ? true : player.hasRateInThisWeek,
        }))
      );
    } catch (err) {
      console.log('error to register player');
    }
  }

  async function handleChangeGroupBy(group: string) {
    const response = await getPlayers(group);
    setPlayers(response!);
  }

  return {
    onRegisterRate,
    loadRegister,
    isLoading,
    players: formatedPlayers,
    handleChangeGroupBy,
  };
}
