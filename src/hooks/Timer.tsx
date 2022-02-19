import {useEffect, useState} from "react";

type TimerProps = {
    milisegundos: number
}

export function Timer({milisegundos}: TimerProps) {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        console.log('useEffect');
        setInterval(() => setSegundos(s => s + 1) ,1000);
    }, [milisegundos]);

    return (
        <div>
            <h4>Timer: <small> {segundos} </small></h4>
        </div>
    );
}