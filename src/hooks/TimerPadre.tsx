import React, {lazy, Suspense, useState} from "react";

const Timer = lazy(() => import('./Timer'));

export function TimerPadre() {

    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <span>Milisegundos { milisegundos }</span>
                <br/>

                <button className="btn btn-outline-success"
                        onClick={ () => setMilisegundos(1000)}>
                    1000
                </button>

                <button className="btn btn-outline-success"
                        onClick={ () => setMilisegundos(2000)}>
                    2000
                </button>

                <Timer milisegundos={milisegundos}/>
            </Suspense>
        </div>
    );
}