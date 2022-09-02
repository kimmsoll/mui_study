import { Assignment } from '@mui/icons-material';
import { Avatar, AvatarGroup } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';

const AvatarComponent = () => {
  return (
    <>
      <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' sx={{ width: 56, height: 56 }} />
      <Avatar sx={{ bgcolor: green[500] }}>
        <Assignment />
      </Avatar>
      <AvatarGroup max={4}>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
        <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
        <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
        <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
      </AvatarGroup>
    </>
  );
};

export default AvatarComponent;
