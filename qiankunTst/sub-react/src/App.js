import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import actions from '@/shared/actions';

function App() {
  const [appToken, setAppToken] = useState();

  useEffect(() => {
    actions.onGlobalStateChange((state) => {
      const { token } = state;
      console.info(token);
      setAppToken(token);
    }, true);
  }, []);

  useEffect(() => {
    console.info(appToken, 'appTokenappTokenappTokenappToken');
  }, [appToken])

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
    </div>
  );
}

export default App;
