const path = require('path');

module.exports = {

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.tsx'
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  devServer: {
    publicPath: '/dist/',
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test   : /\.tsx?$/,
        loader : 'awesome-typescript-loader'
      },
      {
        enforce : 'pre',
        test    : /\.js$/,
        loader  : 'source-map-loader'
      },
      {
        test: /\.s?css$/,
        use : [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }

}
