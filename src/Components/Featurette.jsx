import React from 'react';
import PropTypes from 'prop-types';

export default function FeaturetteComponent( props ){
  let textOrder = "";
  let imgOrder = "";

  if( props.shifted ){
    textOrder = "order-md-2";
    imgOrder = "order-md-1";
  }

  return(
    <div className="container">
      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className={"col-md-" + props.textCol + " " + textOrder}>
          <h2 className="featurette-heading">{props.title}<span className="text-muted">{props.titleLight}</span></h2>
          <p className="lead">{props.desc}</p>
        </div>
        <div className={"col-md-" + props.imgCol + " " + imgOrder}>
          <img className="featurette-image img-fluid mx-auto" src={props.src} alt={props.alt}/>
        </div>
      </div>
    </div>
  );
};

FeaturetteComponent.propTypes = {
  textCol: PropTypes.number.isRequired,
  imgCol: PropTypes.number.isRequired,
  shifted: PropTypes.bool,
  title: PropTypes.string,
  titleLight: PropTypes.string,
  desc: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};
