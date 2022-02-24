import Clock from './documentation/Clock';

import {Counter} from "./hooks/Counter";
import {User} from "./hooks/User";

import {TimerPadre} from "./hooks/TimerPadre";

import {Toolbar} from "./hooks/Toolbar";
import { ThemeContext } from "./hooks/ThemeContext";

import { createRef } from 'react';
import {FancyButton} from "./forwarding-refs/FancyButton";

import {ContadorRed} from "./hooks/ContadorRed";

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

const ref = createRef<HTMLButtonElement>();

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
        <h2>Reenvio de refs...</h2>
        <FancyButton ref={ref}>
            Click me!
        </FancyButton>
          <hr/>
          <h2>UseReducer</h2>
          <ContadorRed />
      </div>
  )
}

export default App;
