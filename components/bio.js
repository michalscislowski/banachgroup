import React from 'react';

export default function Bio() {

    return (
        <div className="main">
            <a id="back-to-top-anchor" ></a>
            <p className="title">BANACH GROUP</p>
            <p className="description">O block przed wszystkimi</p>
            <style jsx>{`
                .main {
                    width: 100%;
                    min-height: 100vh;
                    height: 100%;
                    color: rgba(243, 182, 31, 1);
                    background-color: #2C3E50;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                } 
                .title {
                    font-size: 9rem;
                    font-weight: 500;
                    margin: 0;
                }
                .description {
                    margin: 0;
                    font-size: 2.2rem;
                    color: #eee;
                }
            @media only screen and (max-width: 812px) {
                .title {
                    padding-top: 10vh;
                    font-size: 7rem;
                }
                .box {
                    align-items: center;
                }
                .description {
                    margin-right: 0;
                    margin-top: -20px;
                    font-size: 2.6rem;
                }
            }
            @media only screen and (max-width: 499px) {
                .main {
                    height: 100vh;
                }
                .title {
                    font-size: 4rem;
                }
                .description {
                    margin-right: 0;
                    margin-top: -20px;
                    font-size: 1.5rem;
                }
            }
            @media only screen and (max-height: 399px) {
                .main {
                    padding-bottom: 40vh;
                }
            }
            `}</style>
        </div>
  );
}