import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MarketingComponent( props ){
  return(
    <div className={"col-lg-" + props.col}>
      <img className="rounded-circle" src={props.imgSrc}
        alt={props.alt} width={props.size} height={props.size}/>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <Link to={props.btnSrc}><p className="btn btn-secondary">{props.btn}</p></Link>
    </div>
  );
};

MarketingComponent.propTypes = {
  col: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  btn: PropTypes.string,
  btnSrc: PropTypes.string
};
