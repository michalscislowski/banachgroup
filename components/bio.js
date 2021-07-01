import React from 'react';

export default function Bio() {

    return (
        <div className="main">
            <div className="box">
                <h1 className="title">BANACH GROUP</h1>
                <p className="description">Nadchodzą wielkie zmiany, a my chcemy być na ich przodzie. Przyszłość należy do bitcoina SV!</p>
            </div>

            <style jsx>{`
            .box {
                padding: 7vh 0 0 0;
                color: white;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: flex-start;
            }
            .title {
                font-size: 120px;
            }
            .description {
                font-size: 25px;
                text-align: justify;
                margin-right: 2vw;
                margin-top: -70px;
            }
            @media only screen and (max-width: 800px) {
            .title {
                font-size: 40px;
            }
            .box {
                align-items: center;
            }
            .description {
                margin-right: 0;
                margin-top: -20px;
                font-size: 15px;
            }

            }
            @media only screen and (max-width: 415px) {
            .box {
                padding: 7vh 20px 0 20px;
            }
            .description {
                margin-right: 0;
                margin-top: -20px;
                font-size: 15px;
            }

            }
            `}</style>
        </div>
  );
}