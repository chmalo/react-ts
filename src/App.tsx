import React from "react";
import Clock from './documentation/Clock';

import {Counter} from "./hooks/Counter";
import {User} from "./hooks/User";

import {TimerPadre} from "./hooks/TimerPadre";

import {Toolbar} from "./hooks/Toolbar";
import { ThemeContext } from "./hooks/ThemeContext";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

function App() {
  return (
      <div>
        <hr/>
        <Clock />
        <hr/>
        <h2>UseState</h2>
        <Counter />
        <User />
        <hr/>
        <h2>UseEffect</h2>
        <TimerPadre />
        <hr/>
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
        <hr/>
      </div>
  )
}

export default App;
