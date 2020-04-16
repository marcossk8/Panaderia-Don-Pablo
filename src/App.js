import React from 'react';
import './App.css';
import AppBar from './components/appBar/appBar';
import Home from './views/home/home';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Home></Home>
    </div>
  );
}

export default App;
