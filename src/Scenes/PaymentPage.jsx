import React from 'react';
import PaymentCartComponent from '../Components/PaymentCart.jsx';

export default function PaymentPage() {
  return(
    <div className="container">
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" alt="" width="72" height="72"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"/>
        <h2>Payment Form</h2>
        <p className="lead">
          Below is an example form built entirely with Bootstrap's form controls.
          Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
        </p>
      </div>
      <div className="row">
        <PaymentCartComponent/>
      </div>
    </div>
  );
};
