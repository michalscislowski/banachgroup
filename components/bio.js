import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import pl from '../public/locales/pl';
import en from '../public/locales/en';
import lottie from 'lottie-web';
import Fade from "@mui/material/Fade";

export default function Bio() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : pl;
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/animacja-logo.json'
        })
    },[])

    return (
        <div className="main">
            <a id="back-to-top-anchor" ></a>
            {/* <p className="title">BANACH GROUP</p> */}
            <img className="image-logo" src="2.png"/>
            {/* <div className="image-logo" ref={container}></div> */}
            <Fade in timeout={500} style={{ transitionDelay: '1750ms'}}>
                <p className="description">{t.slogan}</p>
            </Fade>
            <style jsx>{`
                @keyframes zoomInLogo {
                    0% {
                        transform: scale(0.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                .main {
                    width: 100%;
                    min-height: 100vh;
                    height: 100%;
                    color: rgba(243, 182, 31, 1);
                    background-color: black;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                } 
                .image-logo {
                    width: 700px;
                    height: 392px;
                    animation: 2s ease-out 0s 1 zoomInLogo;
                }
                .title {
                    font-size: 9rem;
                    font-weight: 500;
                    margin: 0;
                }
                .description {
                    margin: 0;
                    font-size: 2.2rem;
                    color: rgba(243, 182, 31, 1);
                }
                @media only screen and (max-width: 1299px) and (orientation:landscape) {
                    .main {
                        padding-top: 50px;
                        padding-bottom: 50px;
                    }
                    .image-logo {
                        width: 600px;
                        height: 324px;
                    }
                    .description {
                        margin-right: 0;
                        font-size: 1.55rem;
                    }
                }
                @media only screen and (max-width: 649px) {
                    .image-logo {
                        width: 95vw;
                        height: 54vw;
                    }
                }
                @media only screen and (max-width: 499px) {
                    .title {
                        font-size: 4.5rem;
                        padding-bottom: 2.5rem;
                        line-height: 5.5rem;
                    }
                    .description {
                        margin-right: 0;
                        font-size: 1.65rem;
                    }
                }
            `}</style>
        </div>
  );
}