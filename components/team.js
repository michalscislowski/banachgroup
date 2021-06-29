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
            <h1>Poznaj drużynę</h1>
            <div className="team">
                <div className="box" className={classes.box}>
                    <Avatar alt="Michał Scisłowski" style={{ height: '300px', width: '300px' }} src="/image0.jpeg" />
                    <p>CEO</p>
                    <h3>Michał Scisłowski</h3>
                    <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/micha%C5%82-scis%C5%82owski-56b2a6163/')}/></a>
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Artur Polarny" style={{ height: '300px', width: '300px', }} src="/aist.jpg"/>
                    <p>COO</p>
                    <h3>Artur Polarny</h3>
                    <div className="socials">
                        <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/artur-polarny/')}/></a>
                        <a><PublicIcon aria-label="Linkedin.com" onClick={() => window.open('http://aistmusic.com/')}/></a>
                    </div>
                    
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Maciej Cieszyński" style={{ height: '300px', width: '300px', }} src="/cieszko.jpg"/>
                    <p>CTO</p>
                    <h3>Maciej Cieszyński</h3>
                    <a><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/maciej-cieszy%C5%84ski-2b8a17161/')}/></a>
                </div>
                <div className="box" className={classes.box}>
                    <Avatar alt="Łukasz Jęksa" style={{ height: '300px', width: '300px', }} src="/ljkwadrat.jpg"/>
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
            width: 100%;
            height: auto;
            font-size: 30px;
            color: white;
            text-align: center;
        }
        .team {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-left: 5vw;
            margin-right: 5vw;
            color: white;
        }
        p {
            font-size: 20px;
            font-weight: 300;
        }
        .socials {
            display: flex;
            flex-direction: row;
        }
        a {
            cursor: pointer;
        }
        `}</style>
        </div>
  );
}