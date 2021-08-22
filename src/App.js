import './App.css';
import {GlobalState} from './helpers/Context'

function App() {
  const {state} = GlobalState()
  console.log('asd', state)
  return (
    <div className="App">

    </div>
  );
}

export default App;
