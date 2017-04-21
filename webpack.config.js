var path = require('path');
var webpack = require('webpack');
// var CleanWebpackPlugin = require('clean-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeWebpackConfig(env) {
	const isProd = process.env.NODE_ENV === 'production';
	const distPath = path.join(__dirname, isProd ? 'dist' : 'static');

	return {
	  entry: './src/main.js',
	  output: {
	    path: distPath,
	    filename: 'w-bundle-[hash].js'
	  },
	  devtool: 'source-map',
	  module: {
	    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
	    }]
	  },
	  plugins: [
			// new CleanWebpackPlugin(distPath, {
	    //   root: __dirname,
	    //   verbose: true,
	    //   dry: false
	    // }),
			// new HtmlWebpackPlugin({
			// 	template: './index.html',
			// 	filename: 'index.html',
			// 	minify: {
			// 		minifyJS: true,
			// 		collapseWhitespace: true,
			// 		removeComments: true
			// 	}
			// })
	  ]
	};
}
