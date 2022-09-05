import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useState, ChangeEvent } from 'react';

const SwitchComponent = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label='Label' />
      <FormControlLabel disabled control={<Switch />} label='Disabled' />
    </FormGroup>
  );
};

export default SwitchComponent;
