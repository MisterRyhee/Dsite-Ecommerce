import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from './Modal.jsx';


export default function HeaderComponent( props ){
  const [ showmodal, setShowmodal ] = useState( false );

  return(
    <div>
      <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link className="text-dark" to="/">Company Name</Link>
        </h5>

        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/features">Features</Link>
          <Link className="p-2 text-dark" to="/payment">Payments</Link>
        </nav>
        <button className="btn btn-outline-primary" onClick={ () => {
          setShowmodal( true );
        } }>
          Sign Up
        </button>
      </header>
      <ModalComponent show={showmodal} click={() => { setShowmodal( false ); }}>
        <p>Option</p>
      </ModalComponent>
    </div>
  );
};
