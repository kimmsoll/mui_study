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
import FloatingActionButtonZoom from 'components/ButtonWithAnimation';
import RadioGroupRating from 'components/styledRating';
import TableComponent from 'components/Table';
import TooltipComponent from 'components/Tooltip';
import AlertComponent from 'components/Alert';
import BackdropComponent from 'components/Backdrop';
import DialogComponent from 'components/Dialog';
import ProgressComponent from 'components/Progress';
import CircularProgressWithLabelComponent from 'components/ProgressWithLabel';
import SkeletonComponent from 'components/Skeleton';
import SnackbarComponent from 'components/Snackbar';
import AccordionComponent from 'components/Accordion';
import BreadcrumbsComponent from 'components/Breadcumbs';
import BottomNavigationComponent from 'components/BottomNavigation';
import AppbarComponent from 'components/Appbar';

const App = () => {
  return (
    <div className='App'>
      {/* Inputs */}

      <ButtonComponent />
      <FloatingActionButtonZoom />
      <AutoCompleteComponent />
      <CheckboxComponent />
      <FabComponent />
      <RadioButtonComponent />
      <RatingComponent />
      <RadioGroupRating />
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
      <TableComponent />
      <TooltipComponent />
      {/* (List) */}

      {/* Feedback */}

      <AlertComponent />
      <BackdropComponent />
      <DialogComponent />
      <ProgressComponent />
      <CircularProgressWithLabelComponent />
      <SkeletonComponent />
      <SnackbarComponent />

      {/* Surfaces */}

      <AccordionComponent />
      <AppbarComponent />
      {/* (Card) */}
      {/* (Paper) */}

      {/* Navigation */}

      <BottomNavigationComponent />
      <BreadcrumbsComponent />
      {/* (Drawer) */}
      {/* (Link) */}
      {/* (Menu) */}
      {/* (Pagination) */}
      {/* (Speed dial) */}
      {/* (Stepper) */}
      {/* (Tabs) */}

      {/* Layout */}

      {/* (Box) */}
      {/* (Container) */}
      {/* (Grid) */}
      {/* (Stack) */}
      {/* (Image list) */}
      {/* (Hidden) */}

      {/* Utils */}

      {/* (Click-away listener) */}
      {/* (CSS Baseline) */}
      {/* (Modal) */}
      {/* (No SSR) */}
      {/* (Popover) */}
      {/* (Popper) */}
      {/* (Portal) */}
      {/* (Textarea autorize) */}
      {/* (Transitions) */}
      {/* (useMediaQuery) */}
    </div>
  );
};

export default App;
