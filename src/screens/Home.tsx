import { HomeTemplate } from '../template/HomeTemplate';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  function onClickPlayer(playerId: string) {
    navigate(`/profile/${playerId}`);
  }

  return <HomeTemplate onClickPlayer={onClickPlayer} />;
}
