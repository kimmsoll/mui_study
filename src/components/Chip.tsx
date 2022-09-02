import { Delete, Face } from '@mui/icons-material';
import { Avatar, Chip } from '@mui/material';

const ChipComponent = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <>
      <Chip label='Clickable' onClick={handleClick} />
      <Chip label='Clickable' variant='outlined' onClick={handleClick} />
      <Chip label='Deletable' onDelete={handleDelete} deleteIcon={<Delete />} variant='outlined' />
      <Chip label='Deletable' variant='outlined' onDelete={handleDelete} />
      <Chip avatar={<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />} label='Avatar' variant='outlined' />
      <Chip icon={<Face />} label='With Icon' />
    </>
  );
};

export default ChipComponent;
