import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import { makeStyles } from '@mui/styles';
import { fontWeight } from '@mui/system';


const useStyles = makeStyles({
    root: {
      background: 'white !important',
      color:'black',
      paddingRight:'unset!important',
      paddingLeft:'unset!important',
      fontWeight:'bold',
      boxShadow:' 0px 15px 10px -15px #ddd9d9 !important',
      border:'2px solid white !important',
      
      
  }
  })

export default function Header() {
    const classes = useStyles()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.root} position="static">
                <Toolbar className={classes.root} >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5 }}
                    >
                        <SortIcon />
                    </IconButton>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontWeight:'900'}}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}