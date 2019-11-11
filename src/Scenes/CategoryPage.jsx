import React from 'react';
import JumboComponent from '../Components/Jumbotron.jsx';
import AlbumComponent from '../Components/Album.jsx';
import Categories from './Config/Categories';

export default function CategoryPage( props ) {
  const category = Categories[ props.match.params.id ].id;

  return (
    <div>
      <JumboComponent
        id={category}
      />
      <AlbumComponent

      />
    </div>
  );
};
