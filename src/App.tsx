import './App.css';

import ButtonComponent from 'components/Button';
import AutoCompleteComponent from 'components/AutoComplete';
import CheckboxComponent from 'components/Checkbox';
import FabComponent from 'components/Fab';
import RadioButtonComponent from 'components/RadioButton';
import RatingComponent from 'components/Rating';
import SelectComponent from 'components/Select';
import SliderComponent from 'components/Slider';
import SwitchComponent from 'components/Switch';
import TextFieldComponent from 'components/TextField';
import TransferListComponent from 'components/TransferList';
import ToggleButtonComponent from 'components/ToggleButton';
import AvatarComponent from 'components/Avatar';
import AvatarWithBadge from 'components/AvatarWithBadge';
import BadgeComponent from 'components/Badge';
import ChipComponent from 'components/Chip';
import DividerComponent from 'components/Divider';

const App = () => {
  return (
    <div className='App'>
      {/* Inputs */}
      <ButtonComponent />
      <AutoCompleteComponent />
      <CheckboxComponent />
      <FabComponent />
      <RadioButtonComponent />
      <RatingComponent />
      <SelectComponent />
      <SliderComponent />
      <SwitchComponent />
      <TextFieldComponent />
      <TransferListComponent />
      <ToggleButtonComponent />
      {/* Data Display */}
      <AvatarComponent />
      <AvatarWithBadge />
      <BadgeComponent />
      <ChipComponent />
      <DividerComponent />
    </div>
  );
};

export default App;
