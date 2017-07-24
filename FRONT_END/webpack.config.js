var webpack = require('webpack');

module.exports = {
  entry: { app: "./app/App.js",
           facebookapp: "./app/FacebookApp.js"
  },
  output: {
    filename: "public/[name].js",
    chunkFilename: "[id].chunk.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "public/commons.js",
		})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
}