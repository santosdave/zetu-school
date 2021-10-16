import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Helmet} from 'react-helmet'
import './css/App.css';
import MainRoute from './utils/routes';
import MainHeader from './components/layouts/MainHeader';
import Footer from './components/layouts/Footer';
const TITLE = 'Zetu School - Home'
function App() {
  return (
    <Router>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div>
        <MainHeader/>
        <MainRoute/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
