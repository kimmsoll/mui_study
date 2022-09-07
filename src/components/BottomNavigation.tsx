import { Favorite, LocationOn, Restore } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const BottomNavigationComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='Recents' icon={<Restore />} />
        <BottomNavigationAction label='Favorites' icon={<Favorite />} />
        <BottomNavigationAction label='Nearby' icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationComponent;
