import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
      padding: '12.5px',
    }
  
}));

export default function Description() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

    return (
        <div className="main">
            <div className="box">
                <a className="title">Co oferujemy</a>
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
                    <Tab style={{ fontFamily: 'Titillium Web', fontSize: '1rem'}} label="Doradztwo biznesowe" {...a11yProps(0)} />
                    <Tab style={{ fontFamily: 'Titillium Web', fontSize: '1rem'}} label="Wdrażanie technologii" {...a11yProps(1)} />
                    <Tab  style={{ fontFamily: 'Titillium Web', fontSize: '1rem'}} label="Rozwój aplikacji" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction} className={classes.ourOffersText}>
                  Banach Group będzie pierwszą firmą w Polsce, 
                  która zapewni klientom detalicznym i biznesowym bezpieczny dostęp do technologii <b>BLOCKCHAIN</b>.
                  Firma chce być w centrum sieci <b>BITCOIN</b> w kraju, oferując usługi informatyczne,
                  a także doradztwo biznesowe w zakresie komercjalizacji technologii <b>BLOCKCHAIN</b>.
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} className={classes.ourOffersText}>
                  Dzięki doświadczeniu, które wykracza poza branżę telekomunikacyjną i IT, 
                  nasza grupa koncentruje się na wprowadzaniu na rynek nowych modeli biznesowych opartych o mikro i nano transakcje.
                  Staramy się znaleźć jak najwięcej zastosowań, 
                  w których technologia <b>BLOCKCHAIN</b> byłaby w stanie podnieść szybkość dostarczania produktu,
                  jego bezpieczeństwo oraz możliwości, powoli starzejących się usług uchodzących za standard.
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction} className={classes.ourOffersText}>
                  <b>BLOCKCHAIN</b> jako narzędzie jest stale rozwijającą się technologią,
                  do której co chwila są tworzone nowe usługi, czy produkty.
                  Dzięki łącznej wiedzy uzyskanej na przestrzeni lat, 
                  mamy możliwości być na przodzie wyścigu o klienta i technologię.
                </TabPanel>
            </div>
            <style jsx>{`
            .main {
              min-height: 100vh;
              height: 100%;
              // background-color: #28313B;
              background-color: black;
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
            @media only screen and (max-width: 1000px) {
              .box {
                width: 60%;
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

