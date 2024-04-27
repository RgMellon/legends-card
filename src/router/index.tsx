import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../screens/Home';
import { PlayerProfile } from '../screens/PlayerProfile';
import { RatePlayer } from '../screens/admin/RatePlayer';
import { Dashboard } from '../screens/admin/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    path: 'admin/dashboard',
    element: <Dashboard />,
  },
]);
