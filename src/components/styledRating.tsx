import { styled } from '@mui/material/styles';
import {
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from '@mui/icons-material';
import { IconContainerProps, Rating } from '@mui/material';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfied color='error' />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfied color='error' />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfied color='warning' />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfied color='success' />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfied color='success' />,
    label: 'Very Satisfied',
  },
};

const IconContainer = (props: IconContainerProps) => {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
};

const RadioGroupRating = () => {
  return (
    <StyledRating
      name='highlight-selected-only'
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
};

export default RadioGroupRating;
