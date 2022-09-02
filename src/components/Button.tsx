import { ButtonGroup, Button } from '@mui/material';

const ButtonComponent = () => {
  return (
    <>
      <ButtonGroup variant='text' color='inherit' size='small' aria-label='text button group'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='outlined' color='primary' size='medium' aria-label='outlined button group'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};
export default ButtonComponent;
