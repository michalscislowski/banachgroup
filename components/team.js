import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import Fade from "@mui/material/Fade";
import VizSensor from 'react-visibility-sensor';
import pl from '../public/locales/pl';
import en from '../public/locales/en';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 25,
        flex: '1 1 0',
        padding: '10px',
        ['@media (max-width: 1000px)']: {
            flex: '1 1 50%',
        },
    },
    avatarStyle: {
        height: '250px', 
        width: '250px',
        cursor: 'pointer',
        ['@media (max-width:1299px)']: {
            height: '225px', 
            width: '225px',
        },
        "&:hover": {
            filter: 'blur(4px)',
            opacity: '75%',
        },
        "&:hover + $social": {
            display: 'block',
        }
    },
    social: {
        position: 'absolute',
        marginTop: '100px',
        fontSize: '50px',
        color: 'rgba(243, 182, 31, 1)',
        display: 'none',
    }
  }));

  export default function Team() {
    const classes = useStyles();
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : pl;
    let [active, setActive] = useState(false);

    return (
        <div className="main">
            <VizSensor
            partialVisibility={true}
            onChange={(isVisible) => {
                setActive(isVisible);
            }}
          >
          <Fade in={active} timeout={1000}>
            <div>
                <a className="team-header">{t.team}</a>
                <div className="team">
                    <div className="box" className={classes.box}>
                        <Avatar alt="Michał Scisłowski" className={classes.avatarStyle} src="/team/scislykwadrat.png" onClick={() => window.open('https://www.linkedin.com/in/micha%C5%82-scis%C5%82owski-56b2a6163/')}/>
                        <LinkedInIcon className={classes.social} aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/micha%C5%82-scis%C5%82owski-56b2a6163/')}/>
                        <p>CEO</p>
                        <h3>Michał Scisłowski</h3>
                    </div>
                    <div className="box" className={classes.box}>
                        <Avatar alt="Artur Polarny" className={classes.avatarStyle} src="/team/aist.jpg" onClick={() => window.open('https://www.linkedin.com/in/artur-polarny/')}/>
                        <LinkedInIcon className={classes.social} aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/artur-polarny/')}/>
                        <p>COO</p>
                        <h3>Artur Polarny</h3>     
                    </div>
                    <div className="box" className={classes.box}>
                        <Avatar alt="Maciej Cieszyński" className={classes.avatarStyle} src="/team/czad_kwadrat.png" onClick={() => window.open('https://www.linkedin.com/in/maciej-cieszy%C5%84ski-2b8a17161/')}/>
                        <LinkedInIcon className={classes.social} aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/maciej-cieszy%C5%84ski-2b8a17161/')}/>
                        <p>CTO</p>
                        <h3>Maciej Cieszyński</h3>
                    </div>
                    <div className="box" className={classes.box}>
                        <Avatar alt="Łukasz Jęksa" className={classes.avatarStyle} src="/team/ljkwadrat.jpg" onClick={() => window.open('https://www.linkedin.com/in/%C5%82ukasz-j%C4%99ksa/')}/>
                        <LinkedInIcon className={classes.social} aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/%C5%82ukasz-j%C4%99ksa/')}/>
                        <p>CIO</p>
                        <h3>Łukasz Jęksa</h3>
                    </div>
                </div>
            </div>
           </Fade>
          </VizSensor>
        <style jsx>{`
        .main {
            // background-color: #2C3E50;
            background-image: url('backgrounds/long_black_stars2.jpg');
              background-size: cover;
            min-height: 100vh;
            height: 100%;
            font-size: 1.875rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
        }
        h3 {
            margin: 0;
            padding: 5px;
            font-size: 20px;
            margin-bottom: 5px;
        }
        .team {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            margin-right: 5vw;
            margin-left: 5vw;
            color: #eee;
            margin-top: 50px;
        }
        .team-header {
            font-size: 50px;
            font-weight: 700;
            color: rgba(243, 182, 31, 1);
            cursor: default;
        }
        p {
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 5px;
        }
        .socials {
            display: flex;
        }
        a {
            cursor: pointer;
            color: #eee;
        }
        @media only screen and (max-width: 1299px) and (orientation:landscape) {
            .team-header {
                font-size: 2.5rem;
                margin-bottom: 25px;
                margin-top: 25px;
            }
            .main {
                font-size: 1.5rem;
                padding-top: 70px;
                padding-bottom: 20px;
            }
        }
        @media only screen and (max-width: 499px) {
            .main {
                padding-bottom: 10vh;
                padding-top: 100px;
                margin: 0;
            }
            .socials {
                padding-bottom: 20px;
            }
            h3 {
                margin-bottom: 30;
            }
            p {
                margin-bottom: 0;
            }
            .team-header {
                margin-bottom: 20px;
            }
        }
        `}</style>
        </div>
  );
}