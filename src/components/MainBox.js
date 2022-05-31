import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
        background: 'transparent !important',
        fontSize: ' 0.75rem !important',
        fontWeight:'bold !important',
        color:'grey !important',
        padding:' 0px 10px !important',
        minHeight:'0px !important',
        textTransform: 'initial !important'
    },
    span:{
        borderRight:'2px solid grey',
        height:'15px',
        margin:'auto 0px'
    }
    
})
export default function MainBox() {
    const classes = useStyles()
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root} sx={{ width: '100%' }}>
            <Tabs sx={{margin:'20px 0px'}} className={classes.root}
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab className={classes.root} value="one" label="Event Setting" />
                <span className={classes.span}></span>
                <Tab className={classes.root} value="two" label="Engage And Network" />
                <span className={classes.span}></span>
                <Tab className={classes.root} value="three" label="Event Marketing" />
                <span className={classes.span}></span>
                <Tab className={classes.root} value="four" label="Tickets" />
                <span className={classes.span}></span>
                <Tab className={classes.root} value="three" label="Attendes" />
                <span className={classes.span}></span>
                <Tab className={classes.root} value="three" label="Event Content" />
                
            </Tabs>
        </Box>
    );
}
