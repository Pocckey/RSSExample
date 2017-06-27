// This file configures the development web server
// which supports hot reloading and synchronized testing.

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
const bundler = webpack(config);

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const staticPath = path.join( __dirname, '../src/index.html');

app.use(cors());

app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

app.use(
  require('webpack-hot-middleware')(compiler)
);

app.get('*', function(req,res, next){
  res.redirect('/');
});

app.use(
  express.static(staticPath)
);

// app.use(function(req, res, next){
//   let err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handling
// app.use(
//   express.errorHandler({ dumpExceptions: true, showStack: true })
// );

app.listen(port, function(err){
  if (err){
    console.log(port +' server error');
    throw err;
  }
});
