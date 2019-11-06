import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderComponent from './Components/Header.jsx';
import FooterComponent from './Components/Footer.jsx';
import HomePage from './Scenes/HomePage.jsx';
import PaymentPage from './Scenes/PaymentPage.jsx';

export default function App( props ){
  return(
    <BrowserRouter>
      <HeaderComponent/>
      <main>
        <Switch>
          <Route
            exact path="/"
            component={HomePage}
          />
          <Route
            path="/payment"
            component={PaymentPage}
          />
        </Switch>
      </main>
      <FooterComponent/>
    </BrowserRouter>
  )
};
