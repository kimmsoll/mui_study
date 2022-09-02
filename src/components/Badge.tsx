import { Mail } from '@mui/icons-material';
import { Badge, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

const BadgeComponent = () => {
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div>
      <Badge badgeContent={4} color='primary'>
        <Mail color='action' />
      </Badge>
      <Badge
        color='secondary'
        variant='dot'
        invisible={invisible}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Mail />
      </Badge>
      <FormControlLabel
        sx={{ color: 'text.primary' }}
        control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
        label='Show Badge'
      />
    </div>
  );
};

export default BadgeComponent;
