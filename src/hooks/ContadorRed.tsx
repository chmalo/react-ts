import {ContadorReducer} from "./ContadorReducer";
import {useReducer} from "react";

const initialState = {
    contador: 0,
}

export const ContadorRed = () =>  {
    const [{contador}, dispatch] = useReducer(ContadorReducer, initialState)

    return (
        <>
         <h2>Contador: {contador}</h2>
            <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'incrementar'}) }>
                Click + 1
            </button>
            <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'decrementar'}) }>
                Click - 1
            </button>
            <button className="btn btn-outline-danger" onClick={() => dispatch({ type: 'custom', payload: 100}) }>
                Click + 100
            </button>
        </>
    );
}