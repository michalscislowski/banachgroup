import React from 'react';
import { useRouter } from 'next/router'
import pl from '../public/locales/pl';
import en from '../public/locales/en';

export default function Learn() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : pl;
    return (
        <div className="main">
            <article className="text">
                <h1>{t.lear_header}</h1>
    
                <h3>{t.learn_blockchain}</h3>
                <p>{t.learn_blockchain_text}</p>
            
                <h3>{t.learn_cryptpcurrency}</h3>
                <p>{t.learn_cryptpcurrency_text}</p>
            
                <h3>{t.learn_altcoin}</h3>
                <p>{t.learn_altcoin_text}</p>

                <h3>{t.learn_mining}</h3>
                <p>{t.learn_mining_text}</p>

                <h3>{t.learn_token}</h3>
                <p>{t.learn_token_text}</p>

                <h3>{t.learn_smart_contract}</h3>
                <p>{t.learn_smart_contract_text}</p>

                <h3>{t.learn_halving}</h3>
                <p>{t.learn_halving_text}</p>

                <h3>{t.learn_exchange}</h3>
                <p>{t.learn_exchange_text}</p>

                <h3>{t.learn_satoshi}</h3>
                <p>{t.learn_satoshi_text}</p>

                <h3>{t.learn_ico}</h3>
                <p>{t.learn_ico_text}</p>

                <h3>{t.learn_2fa}</h3>
                <p>{t.learn_2fa_text}</p>

                <h3>{t.learn_51_attack}</h3>
                <p>{t.learn_51_attack_text}</p>

                <h3>{t.learn_wallet_address}</h3>
                <p>{t.learn_wallet_address_text}</p>

                <h3>{t.learn_nft}</h3>
                <p>{t.learn_nft_text}</p>

            </article>    
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
            p:last-child {
              margin-bottom: 0;
              padding-bottom: 50px;
            }
            .main {
                background-image: url('backgrounds/long_black_stars.jpg');
                background-size: cover;
                min-height: 100vh;
            }
            .text {
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
            }
            .kontakt {
                padding-bottom: 50px;
            }
            @media only screen and (max-width: 499px) {
                .text {
                    margin: auto;
                    min-width: 300px;
                    width: 90%;
                }
                p, ul {
                    padding-bottom: 0;
                }
            }
            `}</style>    
        </div>
    );
}