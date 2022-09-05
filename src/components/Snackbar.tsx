import { Close } from '@mui/icons-material';
import { Button, IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';

const SnackbarComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color='secondary' size='small' onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
        <Close fontSize='small' />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message='Note archived' action={action} />
    </div>
  );
};

export default SnackbarComponent;
