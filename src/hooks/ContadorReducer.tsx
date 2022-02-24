
const initialState = {
    contador: 0,
}

type ActionType =
    | { type: 'incrementar'}
    | { type: 'decrementar'}
    | { type: 'custom', payload: number};

export const ContadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state;
    }
}