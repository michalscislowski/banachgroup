import React, { useEffect, useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonStyle: {
    fontFamily: 'consolas',
    fontWeight: '900',
    fontSize: '1.25rem',
    marginTop: 15,
    marginBottom: 10,
    transition: '0.2s',
    ['@media (max-width:499px)']: {
      marginTop: 20,
    },
    color: '#eee',
    borderColor: '#999',
    '&:hover' : {
      color: '#F3B61F',
      background: '#39424c'
    }
  },
});

export default function Header(props) {
  const router = useRouter()
  const classes = useStyles();

  const handleNas = (e) => {
    e.preventDefault()
      router.push('/onas')
  }

  return (
    <div className="main">
      <header>
        <a id="top"></a>
        <a href="/" className="logo">BANACH</a>
        <div className="socials">
          <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
          <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
          <a className="linkedin"><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group')}/></a>
          <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
          <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
        </div>
        <div className="push" >
          <a><Button className={classes.buttonStyle} onClick={handleNas} variant="outlined">
            O NAS
          </Button></a>
          <a><Button className={classes.buttonStyle} variant="outlined">
            BLOG
          </Button></a>
        </div>
      </header>
      <style jsx>{`
  .main {
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%;
    height: auto;
    font-size: 25px;	
    font-weight: 300;	
    z-index: 2;
    scroll-behavior: smooth;
    opacity: ${props.opacityVal};
  }
  a {
    color: #eee;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 20px 15px;
  }
  .logo {
    font-size: 1.8rem;
    font-weight: 700;
    transition: 0.2s;
    margin-bottom: 3px;
   }
   
  .push {
    margin-left: auto;
    cursor: pointer;
    margin-right: 20px;
  }
  header {
    display: flex;
    align-items: center;
    background: transparent;
  }
  .socials {
    display: flex;
    justify-content: center;
    padding-right: 15px;
    cursor: pointer;
  }
  .socials a {
    margin-left: 15px;
    transition: 0.2s;
  }
  .logo:hover {
    color: #F3B61F;
    transform: scale(1.05);
  }
  .facebook:hover {
    color: #3b5998;
  }
  .instagram:hover {
    color: #e4405f;
  }
  .twitter:hover {
    color: #55acee;
  }
  .youtube:hover {
    color: #cd201f;
  }
  .linkedin:hover {
    color: #0072b1;
  }
  @media only screen and (max-width: 800px) {
    .push, .logo {
      font-size: 22px;	
      margin auto;
    }
    a {
      padding: 20px 10px;
    }
  }
  @media only screen and (max-width: 499px) {
    .push, .logo {
      font-size: 18px;	
    }
    a {
      padding: 20px 7px;
    }
    .socials {
      display: none;
    }
  }

`}</style>
    </div>
  );
}