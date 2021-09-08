import React from 'react';

export default function ONasText() {
    return (
        <article className="main">
            <h1>O nas</h1>
   
            <h3>Czym jest Banach Group?</h3>
            <p>Jesteśmy startup'em, nastawionym na uczestniczeniu w procesie: rozwijania technologii blockchain, wprowadzania nowych rozwiązań i pomocy doradzczej z tym związanej. </p>
        
            <h3>Nasza misja</h3>
            <p>Misją Banach Group jest rozwijanie ekosystemu blockchain w Polsce i budowa biznesu w oparciu o jeden stabilny, globalny łańcuch.</p>
        
            <h3>Cele na pierwszy 12 miesięcy:</h3>
            <ul>
                <li>Utworzenie pierwszego zdecentralizowanego kantoru wymiany kryptowalut w oparciu o technologię Non-Custodial wallets (W trakcie)</li>
                <li>Dostarczenie usług tokenizacji niefinansowej i finansowej dla biznesu </li>
                <li>Stworzenie pierwszych regulowanych rynków typu P2P w Polsce (ArtSwap, BeatSwap)</li>
            </ul>

            <h3>Nasze plany na przyszłość</h3>
            <ul>
                <li>Wdrażanie nowoczesnych technologii w oparciu o technologię blockchain</li>
                <li>Pokazanie użytkownikowi pozytywnych aspektów wykorzystania kryptowalut w świecie finansów przyszłości</li>
                <li>Dostarczenie użytkownikom kompleksowych narzędzi oraz programów finansowych</li>
                <li>Promocja równego dostępu do technologii</li>
                <li>Wprowadzenie serii usług opartych o kryptowaluty</li>
            </ul>

            <h3>Kontakt</h3>
            <ul className="kontakt">
                <li>Adres siedziby: Wilczak 12F/48</li>
                <li>Adres email: office@banachgroup.com</li>
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