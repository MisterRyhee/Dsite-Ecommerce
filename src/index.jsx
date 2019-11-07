// Entry Script into React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// import { configureMockBackend } from './_Helpers/mock-backend';
// import * as serviceWorker from './_Services/serviceWorker';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById( 'app' ));
};
render();


// Needed for Hot Module Replacement
if( module.hot ) {
  /*
  module.hot.accept( './Styles/style', () => {
    require( './Styles/style' );
  });
  */

  module.hot.accept( './app', () => {
    console.clear();
    const NextApp = require('./app').default; // Get the updated code
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
