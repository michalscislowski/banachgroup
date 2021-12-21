import React, { useEffect, useState } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router'
import Link from 'next/link';
import makeStyles from '@mui/styles/makeStyles';
import pl from '../public/locales/pl';
import en from '../public/locales/en';
import Fade from "@mui/material/Fade";

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
  buttonLanguage: {
    width: '50px',
    fontFamily: 'Titillium Web',
    fontWeight: '900',
    fontSize: '18px',
    margin: '0 25px 0 0',
    marginTop: '0!important',
    paddingBottom: 7.5,
    padding: '5px 5px 0px 20px',
    borderLeft: '2px solid',
    transition: '0.2s',
    color: '#F3B61F',
    '&:hover' : {
      color: '#eee',
      background: 'black',
    },
    ['@media (max-width:499px)']: {
      margin: '0! important',
      fontSize: '17.5px',
      padding: '5px 0px 0px 5px',
      top: 2.5,
      right: 2.5,
      borderLeft: '0px',
    },
  },
  buttonStyle: {
    fontFamily: 'Titillium Web',
    fontWeight: '900',
    fontSize: '20px',
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 25,
    marginTop: '0!important',
    marginBottom: 7.5,
    transition: '0.2s',
    ['@media (max-width:499px)']: {
      marginRight: 15,
      padding: 8,
      fontSize: '17.5px',
      borderBottom: '0px',
    },
    color: '#eee',
    borderBottom: '2px solid white',
    borderRadius: '0',
    lineHeight: '1.5',
    '&:hover' : {
      color: '#F3B61F',
      background: 'black',
      borderBottom: '2px solid #F3B61F',
    }
  },
  mobilemenu: {
    display: 'none',
    marginLeft: 'auto',
    cursor: 'pointer',
    marginRight: '20px',
    ['@media (max-width:499px)']: {
      display: 'block',
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "rgba(10, 10, 10, 1)",
    },
  }
});

export default function Header(props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pl;
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const navRef = React.useRef()
  navRef.current = navBackground;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 100
        let windowSize = window.innerWidth;
        if (show && windowSize <= 899 || router.pathname == '/blog' || router.pathname == '/onas' || router.pathname == '/aboutus') {
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

  // console.log(JSON.stringify(router));
  return (
    
    <div className={classes.root}>
      <Fade in timeout={500} style={{ transitionDelay: ((router.pathname == '/')) ? '1750ms' : '0ms'}}>
      <AppBar elevation={0} className={classes[navRef.current]}>
        <a href="/" className="logo"> <img src="logo/2.png" width="130" height="73"/> </a>
        <div className="socials">
          <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
          <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
          <a className="linkedin"><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group')}/></a>
          <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
          <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
        </div>
        <div className="push" >
          <Link  href={ locale == 'pl' ? "/learn" : "/learn"}>
            <a className={classes.buttonStyle}>{t.learn_page}</a>
          </Link>
          <Link  href={ locale == 'pl' ? "/onas" : "/aboutus"}>
            <a className={classes.buttonStyle}>{t.headerbutton}</a>
          </Link>
          <Link  href="/blog" >
            <a className={classes.buttonStyle}>blog</a>
          </Link>
          { locale == 'en' ? <Link  href={router.pathname} locale="pl" >
            <a className={classes.buttonLanguage}>PL</a>
          </Link> : null }
          { locale == 'pl' ? <Link  href={router.pathname} locale="en" >
            <a className={classes.buttonLanguage}>ENG</a>
          </Link> : null }
        </div>
        <div className={classes.mobilemenu}>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon style={{color: 'white'}}/>
            </Button>
            <Menu
              id="basic-menu"
              className={classes.menu}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <InfoIcon style={{color: 'white'}}/>
                <Link  href={ locale == 'pl' ? "/onas" : "/aboutus"}>
                  <a className={classes.buttonStyle}>{t.headerbutton}</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <BookIcon style={{color: 'white'}}/>
                <Link  href="/blog" >
                  <a className={classes.buttonStyle}>blog</a>
                </Link>
              </MenuItem>
              <Divider style={{backgroundColor: 'white'}}/>
              <MenuItem onClick={handleClose} disableRipple>
                <TranslateIcon style={{color: 'white'}}/>
                { locale == 'en' ? <Link  href="/" locale="pl" >
                  <a className={classes.buttonLanguage}>PL</a>
                </Link> : null }
                { locale == 'pl' ? <Link  href="/" locale="en" >
                  <a className={classes.buttonLanguage}>ENG</a>
                </Link> : null }
              </MenuItem>
            </Menu>
          </div>
      </AppBar>
      </Fade>
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
    margin-top: 0;
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
    .main {
      width: 100vw;
    }
    .socials {
      display: none;
    }
    .push {
      ${locale == 'pl' ? 'margin-right: 60px' : 'margin-right: 40px'};
    }
  }
  @media only screen and (max-width: 499px) {
    .push {
      display: none;
    }
    a {
    margin-top: 0px;
  }
  }

`}</style>
    </div>
  );
}