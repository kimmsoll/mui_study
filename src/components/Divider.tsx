import { Image } from '@mui/icons-material';
import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const DividerComponent = () => {
  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
        component='nav'
        aria-label='mailbox folders'
      >
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Inbox' secondary='Jan 9, 2014' />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary='Drafts' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Trash' />
        </ListItem>
        <Divider light variant='inset' component='li' />
        <ListItem button>
          <ListItemText primary='Spam' />
        </ListItem>
      </List>

      <Grid container>
        <Grid item xs>
          dsafdsfijiafgjiljeqpro4tw9qru4twrugrwfugirwfeugijfsgrijbdgjkfsijjkdbfg
        </Grid>
        <Divider orientation='vertical' flexItem>
          VERTICAL
        </Divider>
        <Grid item xs>
          dsifjvejfeorijegot9ourhigueithbugrijwfokrijdvkfokijdriokisjdbifsrwjwejopirf
        </Grid>
      </Grid>
    </>
  );
};

export default DividerComponent;
