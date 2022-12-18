import React, { useEffect, useState, useCallback } from 'react';
import { Snake } from './Snake/Snake';
import { Food } from './SnakeFood/Food';
import { TypesOfFood } from '../TypesOfFood/TypesOfFood';
import { GameArea, Section, Wrapper } from './SnakeGame.styled';
import { getRandomCoordinates } from '../../helpers/getRandomCoordinates';
import { getRandomFeedType } from '../../helpers/getRandomFeedType';

export const SnakeGame = ({ playerName }) => {
  const [food, setFood] = useState(getRandomCoordinates);
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);
  const [speed, setSpeed] = useState(200);
  const [direction, setDirection] = useState('RIGHT');
  const [pause, setPause] = useState(false);
  const [counter, setCounter] = useState(0);
  const [feedType, setFeedType] = useState(getRandomFeedType());

  useEffect(() => {
    if (pause) {
      return;
    }
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

    return () => {
      clearTimeout(timer);
    };
  }, [direction, pause, snakeDots, speed]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const gameOver = useCallback(() => {
    alert(
      `Game Over. Snake length is ${snakeDots.length}, Counter = ${counter}.`
    );
    setFood(getRandomCoordinates());
    setSnakeDots([
      [0, 0],
      [2, 0],
    ]);
    setSpeed(200);
    setDirection('RIGHT');
    setCounter(0);
  }, [counter, snakeDots.length]);

  useEffect(() => {
    const enlargeSnake = () => {
      let newSnake = [...snakeDots];
      newSnake.unshift([]);
      setSnakeDots(newSnake);
    };

    const increaseSpeed = () => {
      if (counter % 50 === 0) {
        setSpeed(speed - 20);
      }
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
        if (feedType === 0) {
          setCounter(p => p + 1);
        }
        if (feedType === 1) {
          setCounter(p => p + 5);
        }
        if (feedType === 2) {
          setCounter(p => p + 10);
        }
        setFeedType(getRandomFeedType());
      }
    };

    checkIfOutOfBorders();
    checkIfCollapsed();
    checkIfEat();
  }, [counter, feedType, food, gameOver, snakeDots, speed]);

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
      case 32:
        setPause(p => !p);
        break;
      default:
        break;
    }
  };

  

  return (
    <Section>
      <h1>SNAKE GAME</h1>
      <button onClick={() => setPause(p => !p)}>
        {pause ? 'Play' : 'Pause'}
      </button>
      <Wrapper>
        <div>
          <p> {`Player: ${playerName}`}</p>
          <p>{`Counter = ${counter}`}</p>
          <TypesOfFood />
        </div>
        <GameArea>
          <Snake snakeDots={snakeDots} />
          <Food dot={food} feedType={feedType} />
        </GameArea>
      </Wrapper>
    </Section>
  );
};
