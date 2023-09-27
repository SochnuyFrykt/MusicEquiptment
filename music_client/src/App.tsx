import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Layout from './component/Layout/Layout';
import Slider from './component/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Layout />
      <Slider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <GlobalStyle />
    </div>
  );
}

export default App;
