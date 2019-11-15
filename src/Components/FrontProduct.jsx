import React from 'react';
import PropTypes from 'prop-types';

export default function FrontProductComponent( props ){
  return(
    <div className={"col-md-6 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden " + props.bgClasses}>
      <div className="my-3 py-3">
        <h2 className="display-5">Another headline</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className={"box-shadow mx-auto product-drawbox " + props.boxClasses}></div>
    </div>
  );
};

FrontProductComponent.propTypes = {
  bgClasses: PropTypes.string.isRequired,
  boxClasses: PropTypes.string
};
