var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'warlock-invocation-tracker.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=25000' }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
