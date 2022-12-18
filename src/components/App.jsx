import { useState } from 'react';
import { SnakeGame } from './SnakeGame';
import { UserNameForm } from './UserNameForm/UserNameForm';

export const App = () => {
  const [playerName, setPlayerName] = useState('');
  const onSubmit = name => {
    const playerNameCut = name.slice(0, 15);
    setPlayerName(playerNameCut);
  };

  return (
    <>
      {playerName ? (
        <SnakeGame playerName={playerName} />
      ) : (
        <UserNameForm onSubmit={onSubmit} />
      )}
    </>
  );
};
