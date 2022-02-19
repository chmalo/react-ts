import {useEffect, useRef, useState} from "react";

type TimerProps = {
    milisegundos: number
}

export function Timer({milisegundos}: TimerProps) {
    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {
        console.log('useEffect');
        ref.current && clearInterval( ref.current )

        ref.current = setInterval(() => setSegundos(s => s + 1) , milisegundos);
    }, [milisegundos]);

    return (
        <div>
            <h4>Timer: <small> {segundos} </small></h4>
        </div>
    );
}