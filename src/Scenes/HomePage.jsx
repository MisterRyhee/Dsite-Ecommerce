import React from 'react';
import PageConfigs from './Config/HomePage';
import FrontProductComponent from '../Components/FrontProduct.jsx';

export default function HomePage() {
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Punny headline</h1>
          <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
          <a className="btn btn-primary" href="/#">Coming soon</a>
        </div>
      </div>

      <div className="row full-width margin-zero">
        { PageConfigs.adverts.map(( result, i ) => {
        return(
          <FrontProductComponent
            bgClasses={result.bgClasses}
            boxClasses={result.boxClasses}/>
        );
        }) }
      </div>
    </div>
  );
};
