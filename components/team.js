import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Avatar from '@material-ui/core/Avatar';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1 1 0'
    },
  }));

  export default function Team() {
    const classes = useStyles();

    return (
        <div className="main">
            <a className="team-header">Zespół</a>
            <div className="team">
                <div className="box" className={classes.box}>
                    <Avatar alt="Michał Scisłowski" style={{ height: '250px', width: '250px' }} src="/image0.jpeg" />
                    <p>CEO</p>
                    <h3>Michał Scisłowski</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/micha%C5%82-scis%C5%82owski-56b2a6163/')}/></a>
                    </div>
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Artur Polarny" style={{ height: '250px', width: '250px', }} src="/aist.jpg"/>
                    <p>COO</p>
                    <h3>Artur Polarny</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/artur-polarny/')}/></a>
                        <a><PublicIcon aria-label="Linkedin.com" onClick={() => window.open('http://aistmusic.com/')}/></a>
                    </div>
                    
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Maciej Cieszyński" style={{ height: '250px', width: '250px', }} src="/cieszko.jpg"/>
                    <p>CTO</p>
                    <h3>Maciej Cieszyński</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/maciej-cieszy%C5%84ski-2b8a17161/')}/></a>
                    </div>
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Łukasz Jęksa" style={{ height: '250px', width: '250px', }} src="/ljkwadrat.jpg"/>
                    <p>CIO</p>
                    <h3>Łukasz Jęksa</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/%C5%82ukasz-j%C4%99ksa/')}/></a>
                        <a><PublicIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.jeksa.pl')}/></a>
                    </div>
                </div>
            </div>
        <style jsx>{`
        .main {
            background-color: #2C3E50;
            height: 100vh;
            font-size: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
        }
        .team {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-left: 5vw;
            margin-right: 5vw;
            color: #eee;
        }
        .team-header {
            font-size: 3.2rem;
            font-weight: 700;
            margin-bottom: 50px;
            color: rgba(243, 182, 31, 1);
        }
        p {
            font-size: 20px;
            font-weight: 500;
        }
        .socials {
            display: flex;
            flex-direction: row;
        }
        a {
            cursor: pointer;
            color: #eee;
        }
        a:first-child {
            padding-right: 10px;
        }
        @media only screen and (max-width: 900px) {
        .team {
            flex-direction: column;
            margin-left: 0;
            margin-right: 0;
        }
        }
        @media only screen and (max-width: 900px) {
            .main {
                height: 100%;
                padding-top: 10vh;
                padding-bottom: 10vh;
            }
            h3 {
                margin-top: -20px;
            }
            .socials {
                margin-top: -30px;
                padding-bottom: 8vh;
            }
        }
        `}</style>
        </div>
  );
}