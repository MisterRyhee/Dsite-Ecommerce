import React from 'react';
import PropTypes from 'prop-types';

export default function MarketingComponent( props ){
  return(
    <div className={"col-lg-" + props.col}>
      <img className="rounded-circle" src={props.src}
        alt={props.alt} width={props.size} height={props.size}/>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p><a className="btn btn-secondary" href="/#" role="button">{props.btn}</a></p>
    </div>
  );
};

MarketingComponent.propTypes = {
  col: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  btn: PropTypes.string
};
