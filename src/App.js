import logo from './logo.svg';
import './App.css';
import { BubbleChat } from 'flowise-embed-react'

function App() {
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
      <BubbleChat chatflowid="3fc1633b-8afd-4d1f-b5d4-581afb67a3e9" apiHost="http://localhost:3000" />
    </div>
  );
}

export default App;
