import React from 'react';
import PropTypes from 'prop-types';

export default function ModalComponent( props ){
  const showHideClassname = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassname}>
      { props.children }
      <section className="modal-main">
        <button onClick={props.click}>close</button>
      </section>
    </div>
  );
};

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  children: PropTypes.element
};
