import React from 'react';
import styles from './Snake.module.css';

export const Snake = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const position = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div className={styles.snakeDot} key={i} style={position}></div>;
      })}
    </div>
  );
};
