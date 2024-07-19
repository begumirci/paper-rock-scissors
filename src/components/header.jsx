import { Box, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from '../store/Provider';

export default function Header() {
  const { score } = useContext(MyContext);
  return (
    <div className='header'>
      <img src='../../public/ROCKPAPERSCISSORS..svg' alt='' />
      <div className='scores'>
        <Typography
          sx={{ letterSpacing: '2.5px', color: '#3b4262', fontSize: '16px' }}
        >
          Score
        </Typography>
        <Typography variant='h3' color={'#3b4262'} margin={'0'}>
          {score}
        </Typography>
      </div>
    </div>
  );
}
