import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";


export function ThemedButton() {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <button style={{background: theme.background, color: theme.foreground}}>
                I am styled by theme context!
            </button>
        </div>
    );
}