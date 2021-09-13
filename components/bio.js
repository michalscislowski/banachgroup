import React from 'react';
import { useRouter } from 'next/router'
import pl from '../public/locales/pl';
import en from '../public/locales/en';

export default function Bio() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : pl;

    return (
        <div className="main">
            <a id="back-to-top-anchor" ></a>
            {/* <p className="title">BANACH GROUP</p> */}
            <img className="image-logo" src="2.png"/>
            <p className="description">{t.slogan}</p>
            <style jsx>{`
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
                img {
                    width: 800px;
                    height: 448px;
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
                @media only screen and (max-width: 1299px) {
                    img {
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