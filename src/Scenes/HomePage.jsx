import React from 'react';
import '../Styles/App.css';
import JumboComponent from '../Components/Jumbotron.jsx';
import AlbumComponent from '../Components/Album.jsx';

export default function HomePage() {
  return (
    <div>
      <JumboComponent/>
      <AlbumComponent/>
    </div>
  );
};
