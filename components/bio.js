import React from 'react';

export default function Bio() {

    return (
        <div className="main">
            <div className="box">
                <h1 className="title">BANACH GROUP</h1>
                <p className="description">Nadchodzą wielkie zmiany, a my chcemy być na ich przodzie.</p>
            </div>

            <style jsx>{`
            .main {
                width: 100%;
                height: 100vh;
                background-color: #c1bfbf;
                background-image: linear-gradient(315deg, #c1bfbf 0%, #af8231 74%);
            } 
            .box {
                padding: 7vh 0 0 7vw;
                color: #0A100D;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: flex-start;
            }
            .title {
                font-size: 120px;
                transition: 0.3s;
            }
            .box:hover {
                color: rgba(243, 182, 31, 1);
            }
            .description {
                font-size: 25px;
                text-align: justify;
                margin-right: 2vw;
                margin-top: -70px;
                transition: 1.5s;
                color: #0A100D;
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