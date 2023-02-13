import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/details" />
      </Routes>
    </Router>

  );
}

export default App;
