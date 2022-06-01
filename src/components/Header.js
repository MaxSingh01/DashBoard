import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Fab from '@mui/material/Fab';
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
        color: 'black',
        paddingRight: 'unset!important',
        paddingLeft: 'unset!important',
        fontWeight: 'bold',
        boxShadow: ' 0px 15px 10px -15px #ddd9d9 !important',
        border: '2px solid white !important',
        paddingTop: '20px'

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

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: '900' }}>
                        Admin Dashboard
                    </Typography>
                    <Fab variant="extended" sx={{ textTransform: 'initial !important', boxShadow: 'unset !important', borderRadius: '2px !important', height: '5vh !important ', backgroundColor: 'white !important', border: '1px solid #bba7a7' }} >
                        Preview on:
                        <PhoneAndroidIcon sx={{ width: '26px !important', height: '14px !important', color: '#817474 !important' }} />
                        <LaptopIcon sx={{ width: '26px !important', height: '14px !important', color: '#817474 !important' }} />
                    </Fab>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
