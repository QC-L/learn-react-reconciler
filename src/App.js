import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <button className="decrement-button" onClick={() => {
          alert(count)
          return setCount(count - 1)
        }}>
          -
        </button>
        <div className="counter-text">{count}</div>
        <button className="decrement-button" onClick={() => {
          alert(count)
          return setCount(count + 1)
        }}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
