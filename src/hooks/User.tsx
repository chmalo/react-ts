import { useState } from "react";

interface Users {
    uuid: string;
    name: string;
}

export function User() {

    const [user, setUser] = useState<Users>();

    const login = () => {
        setUser({
            uuid: 'ABC123',
            name: 'Christian'
        });
    };

    return (
        <div className="mt-3">
            <h3>Usuario: useState</h3>

            <button
                onClick={login}
                className="btn btn-outline-primary">
                Login
            </button>

            {
                user
                    ? <pre>{ JSON.stringify( user ) }</pre>
                    : <pre>No hay usuario</pre>
            }

        </div>
    )
}