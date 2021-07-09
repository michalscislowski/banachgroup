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
    fontWeight: '900',
    marginTop: 15,
    marginBottom: 10,
    transition: '0.2s',
    ['@media (max-width:499px)']: {
      marginTop: 20,
    },
    color: '#0A100D',
    '&:hover' : {
      color: '#F3B61F',
      background: '#0A100D', 
    }
  },
  appBarTransparent: {
    backgroundColor: 'rgba(255,255,255, 0.01)',
    display: 'flex',
    alignItems: 'center',
  },
  appBarSolid: {
    backgroundImage: 'linear-gradient(315deg, #c1bfbf 0%, #af8231 74%)',
    display: 'flex',
    alignItems: 'center',
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
            const show = window.scrollY > 120
            if (show) {
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
    <div className="main">
      <header className={classes[navRef.current]} >
        <a id="top"></a>
        <a href="/"><a className="logo">BANACH</a></a>
        <div className="socials">
          <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
          <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
          <a className="linkedin"><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group')}/></a>
          <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
          <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
        </div>
        <div className="push" >
          <a><Button className={classes.buttonStyle} onClick={handleNas} variant="contained">
            O NAS
          </Button></a>
          <a><Button className={classes.buttonStyle} variant="contained">
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
    border-bottom: 1px solid #F3B61F;
    scroll-behavior: smooth;
    opacity: ${props.opacityVal};
  }
  a {
    color: #0A100D;
    letter-spacing: 2px;
    text-decoration: none;
    padding: 20px 15px;
  }
  .logo {
    font-weight: 700;
    margin-left: 15px;
   }
   
  .push {
    margin-left: auto;
    cursor: pointer;
    margin-right: 20px;
  }
  .header {
    display: flex;
    align-items: center;
  }
  .socials {
    display: flex;
    justify-content: center;
    padding-right: 15px;
    cursor: pointer;
  }
  .socials a {
    margin-left: 15px;
    transition: 0.3s;
  }
  a:hover {
    color: #F3B61F;
    transform: scale(1.15);
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