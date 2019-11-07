import React from 'react';
import Mocks from './Mocks/Cart';

let total = 0;
for ( let item in Mocks.items ){
  total += Mocks.items[item].price;
}

export default function PaymentCartComponent( props ){
  return(
    <section className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">{Mocks.items.length}</span>
      </h4>
      <ul className="list-group mb-3">
        { Mocks.items.map(( result, i ) => (
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{result.title}</h6>
              <small className="text-muted">{result.description}</small>
            </div>
            <span className="text-muted">{result.price}</span>
          </li>
        )) }
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>{total}</strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </section>
  );
};
