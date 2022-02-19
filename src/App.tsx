import Clock from './documentation/Clock';
import {Counter} from "./hooks/Counter";
import {User} from "./hooks/User";

import {TimerPadre} from "./hooks/TimerPadre";

function App() {
  return (
      <div>
        <Clock />
        <hr/>
        <h2>UseState</h2>
        <Counter />
        <User />
        <hr/>
        <h2>UseEffect</h2>
        <TimerPadre />
      </div>
  )
}

export default App;
