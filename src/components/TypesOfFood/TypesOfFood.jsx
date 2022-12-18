import React from 'react';
import { RedPoint, BluePoint, GreenPoint } from './TypesOfFood.styled';

export const TypesOfFood = () => {
  return (
    <>
      <h2>Types of food:</h2>
      <ul>
        <li>
          <RedPoint>red</RedPoint> - 1 point
        </li>
        <li>
          <BluePoint>blue</BluePoint> - 5 point
        </li>
        <li>
          <GreenPoint>green</GreenPoint> - 10 point
        </li>
      </ul>
    </>
  );
};
