import { useState } from 'react';
import { SearchPlayer } from '../../data/usecases/search-player';
import toast from 'react-hot-toast';

export function useHomeViewModel() {
  const [showModal, setShowModal] = useState(false);

  function handleToggle() {
    setShowModal((old) => !old);
  }

  async function handleSearchPlayer(nickName: string) {
    try {
      return await new SearchPlayer().fetch(nickName);
    } catch (err) {
      toast.error('Jogador não encontrado, tente outro ');
      console.log(err);
    }
  }

  return {
    handleToggle,
    showModal,
    handleSearchPlayer,
  };
}
