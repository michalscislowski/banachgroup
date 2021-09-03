import React from 'react';

export default function Bio() {

    return (
        <div className="main">
            <a id="back-to-top-anchor" ></a>
            {/* <p className="title">BANACH GROUP</p> */}
            <img src="2.png" width="800" height="448"/>
            <p className="description">O block przed wszystkimi</p>
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
                @media only screen and (max-width: 499px) {
                    .title {
                        font-size: 4.5rem;
                        padding-bottom: 2.5rem;
                        line-height: 5.5rem;
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