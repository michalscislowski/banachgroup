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
                <AppBar elevation={0} position="static" style={{  backgroundColor:'rgba(255, 255, 255, 0.001)', width: '100%'}} >
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
                    <Tab style={{ fontFamily: 'Titillium Web', fontSize: '1.1rem'}} label="Rozwój technologii" {...a11yProps(0)} />
                    <Tab style={{ fontFamily: 'Titillium Web', fontSize: '1.1rem'}} label="Tworzenie serwisów" {...a11yProps(1)} />
                    <Tab  style={{ fontFamily: 'Titillium Web', fontSize: '1.1rem'}} label="Blockchain konsulting" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction} style={{  width: '100%', textAlign: 'justify'}}>
                    Banach Group będzie pierwszą firmą w Polsce, 
                    która zapewni klientom detalicznym i biznesowym bezpieczny dostęp do technologii <b>BLOCKCHAIN</b>.
                    Firma chce być w centrum sieci <b>BITCOIN</b> w kraju, oferując usługi informatyczne,
                    a także doradztwo biznesowe w zakresie komercjalizacji i wdrażania technologii <b>BLOCKCHAIN</b>.
                    Dzięki doświadczeniu, które wykracza poza branżę telekomunikacyjną i IT, 
                    nasza grupa koncentruje się na wprowadzaniu na rynek nowych modeli biznesowych opartych o mikro i nano transakcje.
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} style={{  width: '100%', textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis ullamcorper ex non dui sodales posuere. 
                    Nulla id nunc sed nisl vehicula lobortis. 
                    Aenean suscipit nisl vitae erat rutrum, a feugiat nulla maximus. 
                    Fusce maximus tellus ac augue malesuada maximus. 
                    Suspendisse et felis pellentesque, placerat lacus nec, posuere enim. 
                    In in lacus ligula. Morbi facilisis in dolor nec volutpat. 
                    Integer eleifend felis suscipit elit euismod eleifend eget eget purus. 
                    Phasellus sollicitudin rhoncus mauris in tincidunt. 
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction} style={{  width: '100%', textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis ullamcorper ex non dui sodales posuere. 
                    Nulla id nunc sed nisl vehicula lobortis. 
                    Aenean suscipit nisl vitae erat rutrum, a feugiat nulla maximus. 
                    Fusce maximus tellus ac augue malesuada maximus. 
                    Suspendisse et felis pellentesque, placerat lacus nec, posuere enim. 
                    In in lacus ligula. Morbi facilisis in dolor nec volutpat. 
                    Integer eleifend felis suscipit elit euismod eleifend eget eget purus. 
                    Phasellus sollicitudin rhoncus mauris in tincidunt. 
                </TabPanel>
            </div>
            <style jsx>{`
            .main {
              height: 100vh;
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
              .main {
                height: 100%;
                padding-top: 10vh;
                margin: auto;
                padding-bottom: 10vh;
              }
              .box {
                width: 100%;
              }
              .title {
                width: 100vw;
                text-align: center;
              }
            `}</style>
    </div>
  );
}

