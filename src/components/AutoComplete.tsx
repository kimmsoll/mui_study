import { Autocomplete, TextField } from '@mui/material';

const AutoCompleteComponent = () => {
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={['dfdf', 'sdfsdfsdf']}
      sx={{ width: 100 }}
      renderInput={(params) => <TextField {...params} label='Movie' />}
    />
  );
};

export default AutoCompleteComponent;
