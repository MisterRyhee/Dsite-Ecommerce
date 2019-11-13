import React from 'react';

export default function ProductPage() {
  return(
    <div className="container py-3 px-lg-5 py-lg-5">
      <div className="row">
        <div className="col-12 col-lg-5">
          <img className="" alt="" src="https://picsum.photos/seed/picsum/320"/>
        </div>
        <div className="col-12 col-lg-7">
          <h2>Drawstring Bag w/Reinforced Corners</h2>
          <p className="text-muted">USD 1.36</p>
          <hr/>
          <h6>Product Description:</h6>
          <p>Drawstring Sports Pack Made Of 210D Polyester Construction, Contrasting Simulated Leather Reinforcement, Black Trim At The Corners</p>
          <hr/>
        </div>
      </div>
    </div>
  );
};
