import React, { useEffect, useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppBar from '@material-ui/core/AppBar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import pl from '../public/locales/pl';
import en from '../public/locales/en';

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
    alignItems: 'center',
    backgroundColor: 'black',
    transition: '0.25s',
  },
  buttonPl: {
    fontFamily: 'Titillium Web',
    fontWeight: '900',
    fontSize: '18px',
    margin: '0 25px 0 0',
    transition: '0.2s',
    color: '#F3B61F',
    '&:hover' : {
      color: '#eee',
      background: '#39424c',
    },
    ['@media (max-width:499px)']: {
      margin: 0,
      padding: 15,
      paddingBottom: 5,
      paddingTop: 5,
      fontSize: '17.5px',
    },
  },
  buttonUk: {
    fontFamily: 'Titillium Web',
    fontWeight: '900',
    fontSize: '18px',
    marginRight: 25,
    transition: '0.2s',
    color: '#F3B61F',
    '&:hover' : {
      color: '#eee',
      background: '#39424c',
    },
    ['@media (max-width:499px)']: {
      margin: 0,
      padding: 15,
      paddingBottom: 5,
      paddingTop: 5,
      fontSize: '17.5px',
    },
  },
  buttonStyle: {
    fontFamily: 'Titillium Web',
    fontWeight: '900',
    fontSize: '20px',
    marginRight: 25,
    transition: '0.2s',
    ['@media (max-width:499px)']: {
      marginRight: 15,
      padding: 5,
      paddingBottom: 5,
      paddingTop: 5,
      fontSize: '17.5px',
    },
    color: '#eee',
    borderBottom: '2px solid white',
    borderRadius: '0',
    lineHeight: '1.5',
    '&:hover' : {
      color: '#F3B61F',
      background: '#39424c',
      borderBottom: '2px solid #F3B61F',
    }
  },
});

export default function Header(props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pl;
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 100
        let windowSize = window.innerWidth;
        if (show && windowSize <= 899) {
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
          { locale == 'en' ? <Link  href="/" locale="pl" >
            <a className={classes.buttonPl}>Polski</a>
          </Link> : null }
          { locale == 'pl' ? <Link  href="/" locale="en" >
            <a className={classes.buttonUk}>English</a>
          </Link> : null }
          <Link  href={ locale == 'pl' ? "/onas" : "/aboutus"}>
            <a className={classes.buttonStyle}>{t.headerbutton}</a>
          </Link>
          <Link  href="/blog" >
            <a className={classes.buttonStyle}>BLOG</a>
          </Link>
        </div>
      </AppBar>
      <style jsx>{`
  a {
    margin-top: 20px;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .logo {
    margin: 0;
    padding: 0;
    margin-top: 15px;
    margin-left: 25px;
   }
   
  .push {
    margin-left: auto;
    cursor: pointer;
    margin-right: 20px;
    display: flex;
    align-items: flex-end;
  }
  .socials {
    display: flex;
    justify-content: center;
    padding-right: 15px;
    cursor: pointer;
    margin-top: -15px;
    color: #eee;
  }
  .socials a {
    margin-left: 15px;
    transition: 0.2s;
    font-size: 25px;
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
  @media only screen and (max-width: 699px) {
    .logo {
      display: none;
    }
    .main {
      width: 100vw;
    }
    .socials {
      display: none;
    }
    .push {
      margin-right: auto;
    }
  }

`}</style>
    </div>
  );
}