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
                    height: 100vh;
                    color: rgba(243, 182, 31, 1);
                    background-color: #2C3E50;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                } 
                .title {
                    font-size: 9rem;
                    transition: 0.2s;
                    font-weight: 500;
                }
                .description {
                    font-size: 2.2rem;
                    text-align: justify;
                    color: #eee;
                }
            @media only screen and (max-width: 800px) {
                .title {
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
            `}</style>
        </div>
  );
}