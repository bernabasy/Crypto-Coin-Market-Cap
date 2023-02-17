import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store';
import Nav from './Components/Nav';
import Models from './Components/renderCrypto';
import Details from './Components/DetailsPage';

const App = () => (

  <Router>
    <Provider store={store}>
      <div className=" bg-primary h-min">
        <Nav />
        <div className="m">

          <Routes>
            <Route path="/" element={<Models />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Provider>
  </Router>

);

export default App;
