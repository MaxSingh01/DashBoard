import AcUnitIcon from '@mui/icons-material/AcUnit';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GroupsIcon from '@mui/icons-material/Groups';
import InsightsIcon from '@mui/icons-material/Insights';
import DraftsIcon from '@mui/icons-material/Drafts';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Footer from './Footer';
import MainBox from './MainBox';
import ChatBox from './ChatBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  height: '86vh',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  root: {
    background: '#f1ebeb'
  },

})
// }))
export default function AdminDashboard() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs sx={{paddingRight:'10px'}} >
          <List  component="nav" aria-label="mailbox folders">
            <ListItem sx={{ background: '#891dc0!important',marginLeft:'auto',width:'50%',borderRadius:'5px' }} button>
            
              <ListItemText sx={{ height: '35px' }}  />
            </ListItem>

            <ListItem button  sx={{marginLeft:'auto',width:'50%',display:'flex',flexDirection:'column'}}>
              <EqualizerIcon/>
              <Typography sx={{fontSize:'0.64rem!important'}}  >Event</Typography>
            </ListItem>
            <ListItem button  sx={{marginLeft:'auto',width:'50%',display:'flex',flexDirection:'column'}}>
              <GroupsIcon/>
            <Typography sx={{fontSize:'0.64rem!important'}}  >Teams</Typography>
              
            </ListItem>
            <ListItem button  sx={{marginLeft:'auto',width:'50%',display:'flex',flexDirection:'column'}}>
              <InsightsIcon/>
            <Typography sx={{fontSize:'0.64rem!important'}}  >Analytics</Typography>
              
            </ListItem>
            <ListItem button  sx={{marginLeft:'auto',width:'50%',display:'flex',flexDirection:'column'}} >
              <DraftsIcon/> 
            <Typography sx={{fontSize:'0.64rem!important'}}  >Results</Typography>
              
            </ListItem>
          </List>
        </Grid>
        <Grid className={classes.root} item xs={9} >
          <Header />
          <MainBox />
          <ChatBox />
        </Grid>
        <Grid item xs sx={{ display: 'flex', flexDirection: 'column' }} >
          <Box sx={{ paddingLeft:'10px',display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: '25px' }} >
            <Avatar alt="Remy Sharp" sx={{ border: '1px solid white', borderRadius: '12px', marginBottom: '1px', }} src="/static/images/avatar/1.jpg" />
            <CircleNotificationsIcon sx={{ color: 'rgba(0, 0, 0, 0.6); ', fontSize: '1.2rem', paddingLeft: '10px', marginBottom: '11px',paddingTop: '8px!important' }} />
            <ForumIcon sx={{ color: 'rgba(0, 0, 0, 0.6); ', fontSize: '1.2rem', paddingLeft: '10px', marginBottom: '12px',paddingTop: '2px !important' }} />
            <SettingsIcon sx={{ color: 'rgba(0, 0, 0, 0.6);', fontSize: '1.2rem', paddingLeft: '10px',paddingTop: '2px!important' }} />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>

  );
}
