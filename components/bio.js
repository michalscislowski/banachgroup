import React from 'react';

export default function Bio() {

    return (
        <div className="main">
            <div className="box">
                <h1 className="title">BANACH GROUP</h1>
                <p className="description">Nadchodzą wielkie zmiany, a my chcemy być na ich przodzie. Przyszłość należy do bitcoina SV!</p>
            </div>

            <style jsx>{`
            .main {
                padding: 9vh 0 0 20vw;
                color: white;
            }
            .box {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: flex-end;
            }
            .title {
                font-size: 180px;
                line-height: 40%;
            }
            .description {
                font-size: 20px;
                line-height: 1%;
            }
            `}</style>
        </div>
  );
}