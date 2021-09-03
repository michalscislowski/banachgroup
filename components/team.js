import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1 1 0',
        padding: '10px',
        ['@media (max-width: 1000px)']: {
            flex: '1 1 50%',
        }
    },
    avatarStyle: {
        height: '250px', 
        width: '250px',
        ['@media (max-width:1250px)']: {
            height: '200px', 
            width: '200px',
        }
    }
  }));

  export default function Team() {
    const classes = useStyles();

    return (
        <div className="main">
            <a className="team-header">Zespół</a>
            <div className="team">
                <div className="box" className={classes.box}>
                    <Avatar alt="Michał Scisłowski" className={classes.avatarStyle} src="/prezes_kwadrat.png" />
                    <p>CEO</p>
                    <h3>Michał Scisłowski</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/micha%C5%82-scis%C5%82owski-56b2a6163/')}/></a>
                    </div>
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Artur Polarny" className={classes.avatarStyle} src="/aist.jpg"/>
                    <p>COO</p>
                    <h3>Artur Polarny</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/artur-polarny/')}/></a>
                    </div>
                    
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Maciej Cieszyński" className={classes.avatarStyle} src="/czad_kwadrat.png"/>
                    <p>CTO</p>
                    <h3>Maciej Cieszyński</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/maciej-cieszy%C5%84ski-2b8a17161/')}/></a>
                    </div>
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Łukasz Jęksa" className={classes.avatarStyle} src="/ljkwadrat.jpg"/>
                    <p>CIO</p>
                    <h3>Łukasz Jęksa</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/%C5%82ukasz-j%C4%99ksa/')}/></a>
                    </div>
                </div>
            </div>
        <style jsx>{`
        .main {
            // background-color: #2C3E50;
            background-color: black;
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
        }
        .team {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            margin-right: 5vw;
            margin-left: 5vw;
            color: #eee;
        }
        .team-header {
            font-size: 50px;
            font-weight: 700;
            margin-bottom: 50px;
            color: rgba(243, 182, 31, 1);
            cursor: default;
        }
        p {
            font-size: 15px;
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
        @media only screen and (max-width: 1300px) {
            .team-header {
                font-size: 2.5rem;
                margin-bottom: 25px;
            }
            .main {
                font-size: 1.5rem;
            }
        }
        @media only screen and (max-width: 499px) {
            .main {
                padding-bottom: 20vh;
                padding-top: 100px;
                margin: 0;
            }
            .socials {
                padding-bottom: 20px;
            }
            h3 {
                margin-top: -30px;
                padding-bottom: 0;
            }
            p {
                margin-top: 2px;
            }
            .team-header {
                margin-bottom: 20px;
            }
        }
        `}</style>
        </div>
  );
}