import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Scenes/HomePage.jsx';

export default function App( props ){
  return(
    <Router>
        <Route
          path="/"
          render={ ( props ) => <HomePage /> }
        />
      </Router>
  )
};
