import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Scenes/HomePage.jsx';
import HeaderComponent from './Components/Header.jsx';
import FooterComponent from './Components/Footer.jsx';

export default function App( props ){
  return(
    <Router>
      <HeaderComponent/>
      <main>
        <Route
          path="/"
          render={ ( props ) => <HomePage /> }
        />
      </main>
      <FooterComponent/>
    </Router>
  )
};
