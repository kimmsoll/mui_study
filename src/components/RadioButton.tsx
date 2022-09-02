import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { pink } from '@mui/material/colors';

const RadioButtonComponent = () => {
  return (
    <FormControl>
      <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
      <RadioGroup row aria-labelledby='demo-radio-buttons-group-label' defaultValue='female' name='radio-buttons-group'>
        <FormControlLabel
          value='female'
          control={
            <Radio
              // size='small'
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 11,
                },
                color: pink[800],
              }}
            />
          }
          label='Female'
        />
        <FormControlLabel value='male' control={<Radio />} label='Male' disabled />
        <FormControlLabel value='other' control={<Radio />} label='Other' />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonComponent;
