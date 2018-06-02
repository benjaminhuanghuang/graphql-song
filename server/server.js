const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');

const models = require('./models');
const schema = require('./schema/schema');

const app = express();

const MONGO_URI = 'mongodb://admin:admin123@ds117495.mlab.com:17495/graphql-song';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

/*
  https://www.npmjs.com/package/webpack-dev-middleware
  - No files are written to disk, rather it handles files in memory
  - If files changed in watch mode, the middleware delays requests until compiling has completed.
  - Supports hot module reload (HMR).

  requires a minimum of Node v6.9.0 and Webpack v4.0.0,
*/
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig)
app.use(webpackMiddleware(compiler));


module.exports = app;
