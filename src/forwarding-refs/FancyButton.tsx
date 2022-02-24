import {ForwardedRef, forwardRef} from "react";

export const FancyButton = forwardRef(({children}: {children:string}, ref: ForwardedRef<HTMLButtonElement>) => {
    const clickChange = () => {
        console.log(children, ref);
    }

    return (
        <button ref={ref} className="FancyButton" onClick={clickChange}>
            {children}
        </button>
    )
});