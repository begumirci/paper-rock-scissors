import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../store/Provider';
import { Button } from '@mui/material';

export default function NewBoard({ userChoice, computerChoice }) {
  const { winner, setWinner, setIsTime, score, setScore } =
    useContext(MyContext);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    control();
    setTimeout(() => {
      setWait(true);
    }, 1000);
  }, [userChoice, computerChoice]);

  function control() {
    if (computerChoice == userChoice) {
      setWinner('Draw');
    } else if (
      (computerChoice == 'rock' && userChoice == 'paper') ||
      (computerChoice == 'scissors' && userChoice == 'rock') ||
      (computerChoice == 'paper' && userChoice == 'scissors')
    ) {
      setWinner('You Win');
      setTimeout(() => {
        setScore(score + 1);
      }, 1500);
    } else {
      setWinner('You Lose');
    }
  }

  function playAgain() {
    setIsTime(false);
  }

  return (
    <div style={{ marginInline: '16px' }}>
      <div className=' newBoard-all-main'>
        <div className='newBoard '>
          <span className='sub-title'>You picked</span>
          <img src={`../public/${userChoice}.svg`} alt='' />
        </div>
        <div>
          {wait ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: '56px',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: 0,
                }}
              >
                {winner}
              </h1>
              <button className='playAgain' onClick={playAgain}>
                Play Again
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='newBoard '>
          <span className='sub-title'>ANONIM</span>
          {wait ? (
            <img src={`../public/${computerChoice}.svg`} alt='' />
          ) : (
            <div className='border'></div>
          )}
        </div>
      </div>
      <div className=' newBoard-all-mobil'>
        <div className='newBoard-choices'>
          <div className='newBoard '>
            <img src={`../public/${userChoice}.svg`} alt='' />
            <span className='sub-title'>You picked</span>
          </div>
          <div className='newBoard '>
            {wait ? (
              <img src={`../public/${computerChoice}.svg`} alt='' />
            ) : (
              <div className='border'></div>
            )}
            <span className='sub-title'>ANONIM</span>
          </div>
        </div>
        <div style={{ marginTop: '64px' }}>
          {wait ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: '56px',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: 0,
                }}
              >
                {winner}
              </h1>
              <button className='playAgain' onClick={playAgain}>
                Play Again
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
