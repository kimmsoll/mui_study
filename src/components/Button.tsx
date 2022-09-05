import { PhotoCamera } from '@mui/icons-material';
import { ButtonGroup, Button, IconButton } from '@mui/material';

const ButtonComponent = () => {
  return (
    <>
      <ButtonGroup variant='text' color='inherit' size='small' aria-label='text button group'>
        <Button variant='contained'>One</Button>
        <Button variant='outlined'>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='outlined' size='medium' aria-label='outlined button group'>
        <Button color='success'>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <IconButton color='primary' aria-label='upload picture' component='label'>
        <input hidden accept='image/*' type='file' />
        <PhotoCamera />
      </IconButton>
    </>
  );
};
export default ButtonComponent;
