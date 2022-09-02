import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { pink } from '@mui/material/colors';
import { useState } from 'react';

const CheckboxComponent = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    console.log(checked);
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              // defaultChecked
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 20 },
                color: pink[600],
                '&.Mui-checked': {
                  color: pink[100],
                },
              }}
            />
          }
          label='Label'
          labelPlacement='start'
        />
        <FormControlLabel disabled control={<Checkbox />} label='Disabled' />
      </FormGroup>
      <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
    </>
  );
};

export default CheckboxComponent;
