import React from 'react';

export default function Bio() {

    return (
        <div className="main">
            <div className="box">
                <a className="title">Banach Group</a>
                <p className="description">Nadchodzą wielkie zmiany, a my chcemy być na ich przodzie.</p>
            </div>

            <style jsx>{`
            .main {
                width: 100%;
                height: 100vh;
                background-color: #2C3E50;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            } 
            .box {
                color: rgba(243, 182, 31, 1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .title {
                font-size: 120px;
                transition: 0.2s;
                font-weight: 500;
            }
            .box:hover {
                color: rgba(243, 182, 31, 1);
            }
            .description {
                font-size: 25px;
                text-align: justify;
                color: #eee;
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