import React from 'react';

export default function Description() {

    return (
        <div className="main">
            <div className="box">
                <h2 className="title">Czym się zajmujemy?</h2>
                <p className="description">
                    Banach Group będzie pierwszą firmą w Polsce, która zapewni klientom detalicznym i biznesowym bezpieczny dostęp do technologii <b>BitcoinSV</b>.
                    Firma chce być w centrum sieci <b>BSV</b> w kraju, oferując usługi informatyczne, a także doradztwo biznesowe w zakresie komercjalizacji i wdrażania technologii <b>blockchain</b>.
                    Dzięki doświadczeniu, które wykracza poza branżę telekomunikacyjną i IT, nasza grupa koncentruje się na wprowadzaniu na rynek nowych modeli biznesowych opartych o mikro i nano transakcje.
                    </p>
            </div>

            <style jsx>{`
            .main {
                height: 100vh;
                background-color: #c1bfbf;
                background-image: linear-gradient(225deg, #c1bfbf 0%, #af8231 74%);
}
            }
            .box {
                margin: 10vh 20px 3vh 20px;
                color: #0A100D;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: flex-start;
            }
            .title {
                font-size: 180%;
            }
            .description {
                font-size: 120%;
                text-align: justify;
                margin-right: 2vw;
                color: #0A100D;
            }
            @media only screen and (max-width: 800px) {
            .box {
                padding: 0 20px 0 20px;
            }
            .description {
                margin-right: 0;
            }

            }
            `}</style>
        </div>
  );
}