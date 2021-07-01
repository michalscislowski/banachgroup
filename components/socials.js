import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default function Socials() {

    return(
        <div className="socials">
            <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/8anach')} /></a>
            <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/8anach')}/></a>
            <a className="linkedin"><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group')}/></a>
            <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/8anach')}/></a>
            <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
            <style jsx> {`
                .socials {
                    display: none;
                }             
                @media only screen and (max-width: 674px) {
                    a {
                        transition: 0.3s;
                    }
                    .socials a {
                        margin: 0;
                    }
                    .socials {
                        margin: 20px auto;
                        display: flex;
                        border-bottom: solid 2px white;
                        color: white;
                        justify-content: space-between;
                        width: 200px;
                        padding-bottom: 5px;
                    }
                    .socials a:first-child{
                        margin-left: 0;
                    }
                    a:hover {
                        cursor: pointer;
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
                }
            `}</style>
        </div>
    )
}