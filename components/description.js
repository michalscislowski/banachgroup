import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from "@mui/material/Fade";
import VizSensor from 'react-visibility-sensor';
import { useRouter } from 'next/router'
import pl from '../public/locales/pl';
import en from '../public/locales/en';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography style={{ fontFamily: 'Titillium Web', fontSize: '1.4rem', fontWeight: '500' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    indicator: {
        backgroundColor: 'white'
    },
    ourOffersText: {
      minHeight: '250px', 
      width: '100%', 
      textAlign: 'justify',
      ['@media (max-width:499px)']: {
        minHeight: '70vh',
      }
    },
    boxProperties: {
      backgroundColor:'rgba(255, 255, 255, 0.001)', 
      width: '100%',
      paddingTop: '12px',
    }
  
}));

export default function Description() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pl;
  let [active, setActive] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

    return (
        <div className="main">
          <VizSensor
            partialVisibility={true}
            onChange={(isVisible) => {
                setActive(isVisible);
            }}
          >
          <Fade in={active} timeout={1000}>
            <div className="box">
                <a className="title">{t.description}</a>
                <AppBar elevation={0} position="static" className={classes.boxProperties} >
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{
                        indicator: classes.indicator
                    }}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    centered
                    >
                    <Tab style={{ fontFamily: 'Titillium Web', fontSize: '0.9rem', color: 'white'}} label={t.subtitle1} {...a11yProps(0)} />
                    <Tab style={{ fontFamily: 'Titillium Web', fontSize: '0.87rem', color: 'white'}} label={t.subtitle2} {...a11yProps(1)} />
                    <Tab  style={{ fontFamily: 'Titillium Web', fontSize: '0.9rem', color: 'white'}} label={t.subtitle3} {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction} className={classes.ourOffersText}>
                  {t.subtitle1text}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} className={classes.ourOffersText}>
                  {t.subtitle2text}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction} className={classes.ourOffersText}>
                  {t.subtitle3text}
                </TabPanel>
            </div>
          </Fade>
          </VizSensor>
            <style jsx>{`
            .main {
              min-height: 100vh;
              height: 100%;
              // background-color: #28313B;
              background-image: url('backgrounds/long_black_stars1.jpg');
              background-size: cover;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: white;
            }
            .box {
              width: 50%;
              font-size: 16px;
              letter-spacing: 0.5px;
              line-height: 1.625;
            }
            .title {
                font-size: 2.8rem;
                font-weight: 700;
                color: rgba(243, 182, 31, 1);
                padding-bottom: 25px;
            }
            @media only screen and (max-width: 1000px) and (orientation:landscape) {
              .main {
                padding-top: 80px;
                padding-bottom: 50px;
              }
              .box {
                width: 60%;
              }
            }
            @media only screen and (max-width: 800px) {
              .box {
                width: 70%;
              }
            }
            @media only screen and (max-width: 499px) {
              .box {
                width: 95%;
                padding-top: 100px;
              }
            }

            `}</style>
    </div>
  );
}

