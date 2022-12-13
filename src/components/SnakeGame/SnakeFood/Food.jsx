import React from 'react';
import styles from './Food.module.css';

export const Food = ({ dot, feedType }) => {
  let color;

  switch (feedType) {
    case 0:
      color = 'red';
      break;
    case 1:
      color = 'blue';
      break;
    case 2:
      color = 'green';
      break;
    default:
      break;
  }
  const position = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
    backgroundColor: `${color}`,
  };

  return <div className={styles.snakeFood} style={position}></div>;
};
