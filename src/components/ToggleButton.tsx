import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState, MouseEvent } from 'react';

const ToggleButtonComponent = () => {
  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label='text alignment'>
      <ToggleButton value='left' aria-label='left aligned'>
        <FormatAlignLeft />
      </ToggleButton>
      <ToggleButton value='center' aria-label='centered'>
        <FormatAlignCenter />
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        <FormatAlignRight />
      </ToggleButton>
      <ToggleButton value='justify' aria-label='justified' disabled>
        <FormatAlignJustify />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtonComponent;
