import { Stack } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../store/Provider';

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
          src='../../public/paper.svg'
          className='circle top-left'
          alt='Circle 1'
          onClick={() => handleClick('paper')}
        />
        <img
          src='public/scissors.svg'
          className='circle top-right'
          alt='Circle 2'
          onClick={() => handleClick('scissors')}
        />
        <img
          src='public/rock.svg'
          className='circle bottom'
          alt='Bottom'
          onClick={() => handleClick('rock')}
        />
      </div>
    </div>
  );
}
