import { ReactNode, createContext, useState } from 'react';
import { Player } from '../domain/usecases/FetchAllPlayers';

type SelectedPlayerContextProviderProps = {
  children: ReactNode;
};

type SelectedPlayerContextDataProps = {
  selectedPlayer: Player;
  handleSelect: (player: Player) => void;
};

export const SelectedPlayerContext =
  createContext<SelectedPlayerContextDataProps>(
    {} as SelectedPlayerContextDataProps
  );

export function SelectedPlayerProvider({
  children,
}: SelectedPlayerContextProviderProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>({} as Player);

  function handleSelect(player: Player) {
    setSelectedPlayer(player);
  }

  return (
    <SelectedPlayerContext.Provider
      value={{
        selectedPlayer,
        handleSelect,
      }}
    >
      {children}
    </SelectedPlayerContext.Provider>
  );
}
