import React from 'react';
import styles from './Food.module.css';

export const Food = ({ dot }) => {
  const position = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };

  return <div className={styles.snakeFood} style={position}></div>;
};
