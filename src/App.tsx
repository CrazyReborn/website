import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
  return (
    <div className="App">
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
}

export default App;
