import { useContext } from 'react';
import { MyContext } from '../store/Provider';
import NewBoard from './newBoard';
import Board from './board';
import { useState } from 'react';

export default function Boards() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const { isTime } = useContext(MyContext);
  return (
    <div>
      {isTime ? (
        <NewBoard userChoice={userChoice} computerChoice={computerChoice} />
      ) : (
        <Board
          setUserChoice={setUserChoice}
          setComputerChoice={setComputerChoice}
          serChoice={userChoice}
          computerChoice={computerChoice}
        />
      )}
    </div>
  );
}
