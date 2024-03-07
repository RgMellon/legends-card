import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../screens/Home';
import { PlayerProfile } from '../screens/PlayerProfile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile/:id',
    element: <PlayerProfile />,
  },
]);
