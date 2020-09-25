import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello world!
        </p>
      <p>
        This application running with Electron!
        </p>
      <a
        href="https://github.com/Teuuz1994/electron-with-react-typescript"
        className="App-link"
      >Click here to learning documentation</a>
    </header>
  </div>
);


export default App;
