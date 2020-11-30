

import Pokedex from './Pokedex'
import pokes from './pokes'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pokedex
        </h1>
        <Pokedex pokes={pokes}/>
      </header>
    </div>
  );
}

export default App;
