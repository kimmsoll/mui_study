import { Favorite } from '@mui/icons-material';
import { Rating, Typography } from '@mui/material';
import { useState } from 'react';

const RatingComponent = () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <Typography component='legend'>Controlled</Typography>
      <Rating
        name='simple-controlled'
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue as number);
        }}
      />
      <Typography component='legend'>Read only</Typography>
      <Rating value={value} size='small' emptyIcon={<Favorite style={{ opacity: 0.55 }} fontSize='inherit' />} />
      <Typography component='legend'>Disabled</Typography>
      <Rating name='disabled' value={value} disabled size='large' />
      <Typography component='legend'>No rating given</Typography>
      <Rating name='no-value' value={null} />
    </>
  );
};

export default RatingComponent;
