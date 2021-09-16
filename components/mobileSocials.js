import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MobileSocials() {
    return (
        <div className="container">
                    <div className="socials">
                        <a className="facebook"><FacebookIcon style={{ fontSize: '1.9rem'}} aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
                        <a className="instagram"><InstagramIcon style={{ fontSize: '1.9rem'}} aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
                        <a className="youtube"><YouTubeIcon style={{ fontSize: '1.9rem'}} aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
                        <a className="linkedin"><LinkedInIcon style={{ fontSize: '1.9rem'}} aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group/')} /></a>
                    </div>
            <style jsx>{`
                .container {
                    padding-top: 5vh;
                }
                .socials {
                    display: flex;
                    justify-content: center;
                    padding-right: 15px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid rgba(243, 182, 31, 1);
                    color: #dedede;
                }
                a {
                    cursor: pointer;
                    margin-left: 15px;
                }
                a:hover {
                    transform: scale(1.15);
                    color: rgba(243, 182, 31, 1);
                    transition: 0.3s;
                }
                @media only screen and (max-width: 1100px) {
                    .banach-mobile {
                        margin-top: 15.5px;
                    }
                }
            `}</style>
        </div>
    )
}