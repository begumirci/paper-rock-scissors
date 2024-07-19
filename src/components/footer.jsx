import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function Footer() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <div className='footer-main'>
        <button onClick={() => setOpen(true)}>RULES</button>
      </div>

      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogContent>
            <Box className='dialog-title'>
              <Typography
                variant='h5'
                color={'#3B4262'}
                sx={{ fontWeight: '700', lineHeight: '32px' }}
              >
                RULES
              </Typography>
              <Typography
                variant='h5'
                color={'rgba(59, 66, 98, 0.25)'}
                sx={{ cursor: 'pointer' }}
                onClick={() => setOpen(false)}
              >
                x
              </Typography>
            </Box>

            <DialogContentText
              id='alert-dialog-description'
              className='dialog-contain'
            >
              <img src='../../public/rules.png' alt='' />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
