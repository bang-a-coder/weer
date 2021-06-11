const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
	  contentBase: './dist'
  },
  module: {
	rules: [
	  {
	    test: /\.scss$/,
	    use: [
	      // Creates `style` nodes from JS strings
	      "style-loader",
	      // Translates CSS into CommonJS
	      "css-loader",
	      // Compiles Sass to CSS
	      "sass-loader",
	    ],
	  },
	],
      },
};