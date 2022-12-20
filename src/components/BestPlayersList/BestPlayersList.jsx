import React from 'react';

export const BestPlayersList = ({ allPlayers }) => {
  return (
    <div>
      <h2>Best players:</h2>
      <ul>
        {allPlayers.slice(0, 15).map(({ name, counter, _id }) => (
          <li key={_id}>
            {name} - {counter} points
          </li>
        ))}
      </ul>
    </div>
  );
};
