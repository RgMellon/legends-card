import { Player } from './Player';

export type TeamWithPlayer = {
  teamName: string;
  logo: string;
  id: string;
  players: Player[];
};
