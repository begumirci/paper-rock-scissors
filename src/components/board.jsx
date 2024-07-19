import { Stack } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../store/Provider';
import paper from '../../public/paper.svg';
import rock from '../../public/rock.svg';
import scissors from '../../public/scissors.svg';

export default function Board({
  setUserChoice,
  setComputerChoice,
  computerChoice,
  userChoice,
}) {
  const choices = ['rock', 'paper', 'scissors'];
  const { setIsTime, setWinner, isTime } = useContext(MyContext);

  function madeComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomChoice]);
  }

  function handleClick(choice) {
    setUserChoice(choice);
    setIsTime(true);
    console.log(choice);

    setTimeout(() => {
      madeComputerChoice();
    }, 1000);
  }

  return (
    <div className='full-area'>
      <div className='triangle'>
        <img
          src={paper}
          className='circle top-left'
          alt='Circle 1'
          onClick={() => handleClick('paper')}
        />
        <img
          src={scissors}
          className='circle top-right'
          alt='Circle 2'
          onClick={() => handleClick('scissors')}
        />
        <img
          src={rock}
          className='circle bottom'
          alt='Bottom'
          onClick={() => handleClick('rock')}
        />
      </div>
    </div>
  );
}
