import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store';
import Nav from './Components/Nav';
import Models from './Components/Models';

function App() {
  return (

    <Router>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={<Models />} />
          <Route path="/details" />
        </Routes>
      </Provider>
    </Router>

  );
}

export default App;
