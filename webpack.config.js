const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [ 'aws-sdk' ],
  module: {
    loaders: [ {
      test: /\.js$/,
      loaders: [ 'babel-loader' ],
      include: __dirname,
      exclude: /node_modules/
    } ]
  }
};
