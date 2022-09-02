import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

const SelectComponent = () => {
  const [age, setAge] = useState('');

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-label'>Age</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={age}
        label='Age'
        onChange={handleChangeAge}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twensdfsdfsdafhasdfkjakdfhsadfkdhsdfdsfhskdfty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>With label + helper text</FormHelperText>
    </FormControl>
  );
};

export default SelectComponent;
