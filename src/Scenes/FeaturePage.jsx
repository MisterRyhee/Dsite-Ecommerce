import React from 'react';
import CarouselComponent from '../Components/Carousel.jsx';
import MarketingComponent from '../Components/Marketing.jsx';
import FeaturetteComponent from '../Components/Featurette.jsx';
import PageConfigs from './Config/FeaturePage';
import CategoryConfigs from '../Database/Categories';

export default function FeaturePage() {
  return (
    <div>
      <CarouselComponent/>
      <div className="container marketing">
        <div className="row">
          { PageConfigs.marketing.map(( result, i ) => {
          let category = CategoryConfigs[ i ];

          return (
          <MarketingComponent
            col={result.col}
            imgSrc={category.imgSrc}
            alt={category.alt}
            size={result.size}
            title={category.name}
            desc={category.desc}
            btn={result.btn}
            btnSrc={result.btnSrc}
            key={"HomeMarket" + i}/>
          )}) }
        </div>
      </div>
      { PageConfigs.featurettes.map(( result, i ) => {
      return (
        <FeaturetteComponent
          textCol={result.textCol}
          imgCol={result.imgCol}
          shifted={result.shifted}
          title={result.title}
          titleLight={result.titleLight}
          desc={result.desc}
          imgSrc={result.imgSrc}
          linkSrc={result.linkSrc}
          alt={result.alt}
          key={"HomeFeat" + i}/>
      )})}
    </div>
  );
};
