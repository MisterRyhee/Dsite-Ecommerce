import React from 'react';

export default function JumboComponent( props ){
  return(
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">{"Category " + props.id}</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don't simply skip over it entirely.
        </p>
        <p>
          <a className="btn btn-primary ml-2" href="/#">Main call to action</a>
          <a className="btn btn-secondary ml-2" href="/#">Secondary action</a>
        </p>
      </div>
    </section>
  );
};
