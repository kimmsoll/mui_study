import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Stack, Slider, Box } from '@mui/material';
import { useState } from 'react';

const SliderComponent = () => {
  // const [value, setValue] = useState<number>(30);
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
        <VolumeDown />
        <Slider
          aria-label='Volume'
          value={value}
          onChange={handleChange}
          valueLabelDisplay='auto'
          // getAriaValueText={valuetext}
        />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label='Disabled slider' />
    </Box>
  );
};
export default SliderComponent;
