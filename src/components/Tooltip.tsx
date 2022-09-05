import styled from '@emotion/styled';
import { Button, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

const longText = `
  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.
  `;

const TooltipComponent = () => {
  return (
    <>
      <Tooltip title={longText}>
        <Button sx={{ m: 1 }}>Default Width [300px]</Button>
      </Tooltip>
      <CustomWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
      </CustomWidthTooltip>
      <NoMaxWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>No wrapping</Button>
      </NoMaxWidthTooltip>
    </>
  );
};

export default TooltipComponent;
