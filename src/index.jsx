// Entry Script into React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import { configureMockBackend } from './_Helpers/mock-backend';
// import * as serviceWorker from './_Services/serviceWorker';

ReactDOM.render( <App />, document.getElementById( 'app' ) );

// Needed for Hot Module Replacement
if( module.hot ) {
  /*
  module.hot.accept( './Styles/style', () => {
    require( './Styles/style' );
  });
  */

  module.hot.addStatusHandler( status => {
    if (status === 'prepare') {
      console.clear();
    }
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
