import { Favorite, FavoriteBorder, Navigation } from '@mui/icons-material';
import { Checkbox, Fab } from '@mui/material';

const FabComponent = () => {
  return (
    <>
      <Fab variant='extended' size='small'>
        <Navigation sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab aria-label='like' size='medium'>
        {/* <Favorite /> */}
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </Fab>
    </>
  );
};

export default FabComponent;
