import {useState} from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = (number: number = 1) => {
        setCounter(counter + number);
    }
    return (
        <div className="mt-3">
            <h3>Counter: useState</h3>
            <p>You clicked {counter} times</p>
            <div className="row">
                <button
                    onClick={() => increment()}
                    className="btn btn-outline-primary mt-2 col-md-2">
                    Click me
                </button>
                <button
                    onClick={() => increment(2)}
                    className="btn btn-outline-primary mt-2 col-md-2">
                    Click me +2
                </button>
                <button
                    onClick={() => setCounter(0)}
                    className="btn btn-outline-danger mt-2 col-md-2">
                    Reset
                </button>
            </div>
        </div>
    )
}