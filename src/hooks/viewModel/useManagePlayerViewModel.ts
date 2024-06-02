import { useQuery } from 'react-query';
import { FetchTeams } from '../../data/usecases/fetch-teams';
import { useState } from 'react';
import { PlayerRequestProps } from '../../domain/dtos/request/PlayerRequestDto';
import { RegisterPlayer } from '../../data/usecases/register-player';
import toast from 'react-hot-toast';
import { useFetchAllPlayers } from '../useFetchAllPlayers';
import { UpdatePlayerStatus } from '../../data/usecases/update-player-status';

export function useManagePlayerViewModel() {
  const { fetchAllPlayers } = useFetchAllPlayers();
  const { isLoading, data } = useQuery(
    ['fetchTeam'],
    async () => {
      const result = await new FetchTeams().fetch();
      return result.teams;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: isLoadingPlayer, data: players } = useQuery(
    ['fetchAllPlayers'],
    async () => {
      return await fetchAllPlayers('team');
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const [isOpenModalReplacePlayer, setIsOpenModalReplacePlayer] =
    useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [isOpenCreateReplacePlayer, setIsOpenCreateReplacePlayer] =
    useState(false);

  function handleToggleModalReplacePlayer() {
    setIsOpenModalReplacePlayer((old) => !old);
  }

  function handleToggleModalCreatePlayer() {
    setIsOpenCreateReplacePlayer((old) => !old);
  }

  function onConfirmAlert() {
    setShowAlert(false);
  }

  async function handleCreatePlayer(player: PlayerRequestProps) {
    try {
      await new RegisterPlayer().register(player);
      toast.success('Player registrado com sucesso!');
      handleToggleModalCreatePlayer();
    } catch (error) {
      console.log(error);
      toast.error('Falha ao registrar player!');
    }
  }

  async function handleUpdatePlayerStatus(playerId: string) {
    if (!playerId)
      return toast.error('Passe um id do jogador que será desativado');
    try {
      await new UpdatePlayerStatus().update(playerId);
      toast.success('Player desativado com sucesso!');
      onConfirmAlert();
    } catch (error) {
      console.log(error);
      toast.error('Falha ao desativar player!');
    }
  }

  return {
    isLoadingTeam: isLoading,
    teams: data,
    showAlert,
    isOpenCreateReplacePlayer,
    onConfirmAlert,
    handleToggleModalCreatePlayer,
    handleToggleModalReplacePlayer,
    isOpenModalReplacePlayer,
    setIsOpenModalReplacePlayer,
    setIsOpenCreateReplacePlayer,
    setShowAlert,
    handleCreatePlayer,
    players,
    isLoadingPlayer,
    handleUpdatePlayerStatus,
  };
}
