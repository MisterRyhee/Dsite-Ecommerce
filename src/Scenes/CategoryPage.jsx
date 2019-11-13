import React from 'react';
import JumboComponent from '../Components/Jumbotron.jsx';
import AlbumComponent from '../Components/Album.jsx';
import Categories from '../Database/Categories';

export default function CategoryPage( props ) {
  const category = Categories[ props.match.params.id ];

  return (
    <div>
      <JumboComponent
        id={category.id}
        name={category.name}
      />
      <AlbumComponent
        products={category.products}
      />
    </div>
  );
};
