import React from 'react';
import { snakeFood } from './Food.module.css';

export const Food = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };

  return <div className={snakeFood} style={style}></div>;
};
