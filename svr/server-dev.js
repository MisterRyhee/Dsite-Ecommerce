// File that launches the development environment's web-server

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev.config.js';

const app = express(),
DIST_DIR = __dirname,
HTML_FILE = path.join( DIST_DIR, 'index.html' ),
CSS_FILE = path.join( DIST_DIR, 'style.css' ),
compiler = webpack( config );

app.use( express.static( DIST_DIR ) );
app.use( '/public', express.static( 'public' ) );

app.use( express.urlencoded({ extended: false }) );
app.use( express.json() );

// Rebuilds upon detecting saves on files
app.use( webpackDevMiddleware( compiler, {
  publicPath: config.output.publicPath
}));

// Browsers automatically refresh upon recompilation
app.use( webpackHotMiddleware( compiler ) );

// Build/Rebuild the style css
app.get( 'style.css', ( req, res, next ) => {
  compiler.outputFileSystem.readFile( CSS_FILE, ( err, result ) => {
    if( err ) {
      return next( err );
    }
    res.send( result );
    res.end();
  });
});

// Build/Rebuild the index html
app.get( 'index.html', ( req, res, next ) => {
  compiler.outputFileSystem.readFile( HTML_FILE, ( err, result ) => {
    if( err ) {
      return next( err );
    }
    res.set( 'content-type', 'text/html' );
    res.send( result );
    res.end();
  });
});

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
    console.log( `App listening to ${PORT}....` );
    console.log( 'Press Ctrl+C to quit.' );
});
