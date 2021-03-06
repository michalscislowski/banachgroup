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
                    <Tab style={{ fontFamily: 'Titillium Web', fontSize: '1rem'}} label="Wdra??anie technologii" {...a11yProps(1)} />
                    <Tab  style={{ fontFamily: 'Titillium Web', fontSize: '1rem'}} label="Rozw??j aplikacji" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction} className={classes.ourOffersText}>
                  Banach Group b??dzie pierwsz?? firm?? w Polsce, 
                  kt??ra zapewni klientom detalicznym i biznesowym bezpieczny dost??p do technologii <b>BLOCKCHAIN</b>.
                  Firma chce by?? w centrum sieci <b>BITCOIN</b> w kraju, oferuj??c us??ugi informatyczne,
                  a tak??e doradztwo biznesowe w zakresie komercjalizacji technologii <b>BLOCKCHAIN</b>.
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} className={classes.ourOffersText}>
                  Dzi??ki do??wiadczeniu, kt??re wykracza poza bran???? telekomunikacyjn?? i IT, 
                  nasza grupa koncentruje si?? na wprowadzaniu na rynek nowych modeli biznesowych opartych o mikro i nano transakcje.
                  Staramy si?? znale???? jak najwi??cej zastosowa??, 
                  w kt??rych technologia <b>BLOCKCHAIN</b> by??aby w stanie podnie???? szybko???? dostarczania produktu,
                  jego bezpiecze??stwo oraz mo??liwo??ci, powoli starzej??cych si?? us??ug uchodz??cych za standard.
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction} className={classes.ourOffersText}>
                  <b>BLOCKCHAIN</b> jako narz??dzie jest stale rozwijaj??c?? si?? technologi??,
                  do kt??rej co chwila s?? tworzone nowe us??ugi, czy produkty.
                  Dzi??ki ????cznej wiedzy uzyskanej na przestrzeni lat, 
                  mamy mo??liwo??ci by?? na przodzie wy??cigu o klienta i technologi??.
                </TabPanel>
            </div>
            <style jsx>{`
            .main {
              min-height: 100vh;
              height: 100%;
              background-color: #28313B;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: white;
            }
            .box {
              width: 60%;
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

