import React from 'react';
import CarouselComponent from '../Components/Carousel.jsx';
import MarketingComponent from '../Components/Marketing.jsx';
import FeaturetteComponent from '../Components/Featurette.jsx';
import Configs from './Config/HomePage';

export default function HomePage() {
  return (
    <div>
      <CarouselComponent/>
      <div className="container marketing">
        <div className="row">
          { Configs.marketing.map(( result, i ) => {
          return (
          <MarketingComponent
            col={result.col}
            src={result.src}
            alt={result.alt}
            size={result.size}
            title={result.title}
            desc={result.desc}
            btn={result.btn}
            key={"HomeMarket" + i}/>
          )}) }
        </div>
      </div>
      { Configs.featurettes.map(( result, i ) => {
      return (
        <FeaturetteComponent
          textCol={result.textCol}
          imgCol={result.imgCol}
          shifted={result.shifted}
          title={result.title}
          titleLight={result.titleLight}
          desc={result.desc}
          src={result.src}
          alt={result.alt}
          key={"HomeFeat" + i}/>
      )})}
      <hr className="featurette-divider"/>
    </div>
  );
};
