import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../screens/Home';
import { PlayerProfile } from '../screens/PlayerProfile';
import { RatePlayer } from '../screens/admin/RatePlayer';
import { Dashboard } from '../screens/admin/Dashboard';
import { BestPlayers } from '../screens/BestPlayers';
import { ManagePlayer } from '../screens/admin/ManagePlayer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/best/players',
    element: <BestPlayers />,
  },
  {
    path: '/profile/:id',
    element: <PlayerProfile />,
  },
  {
    path: 'admin/rate/player',
    element: <RatePlayer />,
  },

  {
    path: 'admin/manage/player',
    element: <ManagePlayer />,
  },

  {
    path: 'admin',
    element: <Dashboard />,
  },
]);
