import React, { useEffect, useState } from 'react';
import { Snake } from './Snake/Snake';
import { Food } from './SnakeFood/Food';
import './SnakeGame.css';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

export const SnakeGame = () => {
  const [food, setFood] = useState(getRandomCoordinates);
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);
  const [speed, setSpeed] = useState(200);
  const [direction, setDirection] = useState('RIGHT');

  useEffect(() => {
    const moveSnake = () => {
      let dots = [...snakeDots];
      let head = dots[dots.length - 1];

      switch (direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 2, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 2];
          break;
        case 'UP':
          head = [head[0], head[1] - 2];
          break;

        default:
          break;
      }
      dots.push(head);
      dots.shift();
      setSnakeDots(dots);
    };

    let timer = setTimeout(moveSnake, speed);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      clearTimeout(timer);
    };
  }, [direction, snakeDots, speed]);

  const onKeyDown = e => {
    e = e || window.event;

    switch (e.keyCode) {
      case 38:
        setDirection('UP');
        break;
      case 40:
        setDirection('DOWN');
        break;
      case 37:
        setDirection('LEFT');
        break;
      case 39:
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const enlargeSnake = () => {
      let newSnake = [...snakeDots];
      newSnake.unshift([]);
      setSnakeDots(newSnake);
    };

    const increaseSpeed = () => {
      if (speed > 10) {
        setSpeed(speed - 10);
      }
    };

    const gameOver = () => {
      alert(`Game Over. Snake length is ${snakeDots.length}`);
    };
    const checkIfOutOfBorders = () => {
      let head = snakeDots[snakeDots.length - 1];
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        gameOver();
      }
    };

    const checkIfCollapsed = () => {
      let snake = [...snakeDots];
      let head = snake[snake.length - 1];
      snake.pop();
      snake.forEach(dot => {
        if (head[0] === dot[0] && head[1] === dot[1]) {
          gameOver();
        }
      });
    };

    const checkIfEat = () => {
      let head = snakeDots[snakeDots.length - 1];
      if (head[0] === food[0] && head[1] === food[1]) {
        setFood(getRandomCoordinates());
        enlargeSnake();
        increaseSpeed();
      }
    };

    checkIfOutOfBorders();
    checkIfCollapsed();
    checkIfEat();
  }, [food, snakeDots, speed]);

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
};
