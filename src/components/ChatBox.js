import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    root: {
        height: '60vh',
        display: 'flex',
        padding: '0px 12px !important',
        paddingBottom: '5px !important'
    },
    Tabs: {
        marginTop:'4px !important',
        marginBottom:'2px !important',
        background: 'white!important',
        textTransform: 'initial !important',
        fontSize: ' 0.75rem !important',
        fontWeight: 'bold !important',
        color: 'grey !important',
        padding: ' 0px 10px !important',
        alignItems: 'start !important',
        minHeight: '25px !important'
    },
    typo: {
        background: 'white',
        borderBottom: '1px solid #e8d8d8 !important',
        padding: '12px',
        color: 'grey',
        fontSize: '0.90rem !important',
        alignItems: 'start !important'
    }

})

export default function ChatBox() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root}
            sx={{ flexGrow: 1, }}
        >
            <Box sx={{ width: '24%', background: 'white', border: '1px solid white', borderRadius: '12px 0px 0px 12px ', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%) !important' }}>
                <Typography sx={{ borderRadius: '10px 0px 0px 0px' }} className={classes.typo}>Event Content</Typography>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', background: 'white' }}
                >

                    <Tab className={classes.Tabs} label="Basic" {...a11yProps(0)} />
                    <Tab className={classes.Tabs} label="Branding" {...a11yProps(1)} />
                    <Tab className={classes.Tabs} label="Agenda" {...a11yProps(2)} />
                    <Tab className={classes.Tabs} label="Virtual/hybrid Center" {...a11yProps(3)} />
                    <Tab className={classes.Tabs} label="Speaker Center" {...a11yProps(4)} />
                    <Tab className={classes.Tabs} label="Sponser Center" {...a11yProps(6)} />
                    {/* // */}
                </Tabs>
            </Box >
            <Card sx={{ width: '100%', borderRadius: '0px 12px 12px 0px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ display: 'flex', width: '100%', color: '#891dc0!important',fontSize:'1rem !important',fontWeight:'900 !important' }} className={classes.typo}>Virtual/hybrid Center   <CancelOutlinedIcon sx={{ display: 'flex', margin: 'auto 12px auto auto' }} /> </Typography>

                </Box>
                <CardContent>

                </CardContent>
            </Card>
        </Box>
    );
}
