import React from 'react';
import Configs from './Config/Album';

export default function AlbumComponent( props ){
  return(
    <section className="album py-5">
      <div className="container">
        <div className="row">
          { Configs.Items.map(( result, i ) => (
            <div className="col-md-4" key={i}>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={result.src} alt=""/>
                <div className="card-body">
                  <h6>{result.title}</h6>
                  <p className="card-text">{result.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">{result.timestamp}</small>
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
};
