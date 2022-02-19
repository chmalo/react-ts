import Clock from './documentation/Clock';
import {Counter} from "./hooks/Counter";
import {User} from "./hooks/User";

function App() {
  return (
      <div>
        <Clock />
        <hr/>
        <Counter />
        <hr/>
        <User />
      </div>
  )
}

export default App;
