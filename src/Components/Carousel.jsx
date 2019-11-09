import React from 'react';
import 'bootstrap';
import Configs from './Config/HomeCarousel';

export default function CarouselComponent( props ){
  return(
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
      { Configs.slides.map(( result, i ) => {
        if( i === 0 ){
          return <li data-target="#myCarousel" data-slide-to={i} key={"carouselIndicator" + i} className="active"></li>
        } else {
          return <li data-target="#myCarousel" data-slide-to={i} key={"carouselIndicator" + i}></li>
        }
      }) }
      </ol>

      <div className="carousel-inner">
      { Configs.slides.map(( result, i ) => {
        if( i === 0 ){
          return (
          <div className="carousel-item active" key={"carouselInner" + i}>
            <div className="pickgradient">
              <img className={result.iteration} src={result.src} alt={result.iteration}/>
            </div>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>{result.title}</h1>
                <p>{result.description}</p>
                <p><a className="btn btn-lg btn-primary" href="/#" role="button">{result.buttonText}</a></p>
              </div>
            </div>
          </div>
        );
        } else {
          return (
          <div className="carousel-item" key={"carouselInner" + i}>
            <div className="pickgradient">
              <img className={result.iteration} src={result.src} alt={result.iteration}/>
            </div>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>{result.title}</h1>
                <p>{result.description}</p>
                <p><a className="btn btn-lg btn-primary" href="/#" role="button">{result.buttonText}</a></p>
              </div>
            </div>
          </div>
          );
        }
      }) }
      </div>

      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
