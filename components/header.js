import React, { useEffect, useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppBar from '@material-ui/core/AppBar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: 'auto',
    fontSize: '25px',	
    fontWeight: '300',	
    zIndex: '2',
    scrollBehavior: 'smooth',
    opacity: '${props.opacityVal}',
  },
  appBarTransparent: {
    background: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: '0.1s',
  },
  appBarSolid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: '#2C3E50',
    transition: '0.5s',
  },
  buttonStyle: {
    fontFamily: 'Titillium Web',
    fontWeight: '900',
    fontSize: '1.25rem',
    marginTop: 10,
    marginBottom: 20,
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
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 100
        let windowSize = window.innerWidth;
        if (show & windowSize <= 899) {
            setNavBackground('appBarSolid')
        } else {
            setNavBackground('appBarTransparent')
        }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNas = (e) => {
    e.preventDefault()
      router.push('/onas')
  }

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes[navRef.current]}>
        <a href="/" className="logo"> <img src="2.png" width="130" height="73"/> </a>
        <div className="socials">
          <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
          <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
          <a className="linkedin"><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group')}/></a>
          <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
          <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
        </div>
        <div className="push" >
          <a><Button className={classes.buttonStyle} onClick={handleNas} >
            O NAS
          </Button></a>
          <a><Button className={classes.buttonStyle} >
            BLOG
          </Button></a>
        </div>
      </AppBar>
      <style jsx>{`
  a {
    color: #eee;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 20px 15px;
  }
  .logo {
    margin: 0;
    padding: 0;
   }
   
  .push {
    margin-left: auto;
    cursor: pointer;
    margin-right: 20px;
  }
  header {
    display: flex;
    align-items: baseline;
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
    transform: scale(1.025);
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
    .push {
      font-size: 22px;	
      margin auto;
    }
    .socials a {
      padding: 20px 10px;
    }
  }
  @media only screen and (max-width: 640px) {
    .main {
      width: 100vw;
    }
    .push {
      font-size: 1.5rem;	
    }
    .logo {
      margin-top: 10px;
    }
    .socials {
      display: none;
    }
  }

`}</style>
    </div>
  );
}