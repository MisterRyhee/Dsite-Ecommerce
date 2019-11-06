import React from 'react';
import Configs from './Config/Footer';

export default function FooterComponent( props ){
  return(
    <footer className="pt-4 my-md-5 pt-md-5 border-top row">
      <div className="col-12 col-md">
        <img className="mb-2" alt="" width="24" height="24"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"/>
        <small className="d-block mb-3 text-muted">© 2017-2018</small>
      </div>

      { Configs.Categories.map(( result, i ) => (
        <div className="col-6 col-md" key={"FootTitle" + i}>
          <h5>{result.title}</h5>
          <ul className="list-unstyled text-small">
            { result.contents.map(( list, o ) => (
              <li key={"FootLink" + i + o}>
                <a className="text-muted" href={list.src}>{list.title}</a>
              </li>
            )) }
          </ul>
        </div>
      )) }
    </footer>
  );
};
