import React from 'react';
import logo from './logo.svg';
import './App.css';
import CryptoContainer from './components/cryptoContainer'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <CryptoContainer />
    </div>
  );
}

export default App;
