import React from 'react';
import { useRouter } from 'next/router'
import pl from '../public/locales/pl';
import en from '../public/locales/en';

export default function ONasText() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : pl;
    return (
        <article className="main">
            <h1>{t.headerbutton}</h1>
   
            <h3>{t.whatis}</h3>
            <p>{t.whatistext}</p>
        
            <h3>{t.ourmission}</h3>
            <p>{t.ourmissiontext}</p>
        
            <h3>{t.goals}</h3>
            <ul>
                <li>{t.goalstext1}</li>
                <li>{t.goalstext2}</li>
                <li>{t.goalstext3}</li>
            </ul>

            <h3>{t.plans}</h3>
            <ul>
                <li>{t.planstext1}</li>
                <li>{t.planstext2}</li>
                <li>{t.planstext3}</li>
                <li>{t.planstext4}</li>
                <li>{t.planstext5}</li>
            </ul>

            <h3>{t.onascontact}</h3>
            <ul className="kontakt">
                <li>{t.onascontacttext1}</li>
                <li>{t.onascontacttext2}</li>
            </ul>
            <style jsx> {`
            h1 {
                color: rgba(243, 182, 31, 1);
                font-size: 32px;
            }
            h3 {
                color: rgba(243, 182, 31, 1);
                font-size: 18px;
            }
            p, ul {
                padding-bottom: 24px;
            }
            ul:last-child {
                margin-bottom: 0;
            }
            .main {
                margin: auto;
                padding-top: 90px;
                width: 60%;
                max-width: 750px;
                min-width: 400px;
                font-size: 16px;
                min-height: 879px;
                text-align: justify;
                letter-spacing: 0.5px;
                line-height: 1.625;
                background-color: black;
            }
            .kontakt {
                padding-bottom: 50px;
            }
            @media only screen and (max-width: 499px) {
                .main {
                    margin: auto;
                    min-width: 300px;
                    width: 90%;
                }
                p, ul {
                    padding-bottom: 0;
                }
            }
            `}</style>
        </article>
    );
}