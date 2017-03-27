var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
    indexEntry: __dirname + '/src/index.js'
  },
	output: {
		path: __dirname + '/content',
		filename: 'index.bundle.js',
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass?sourceMap',
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192',
			},
		]
	},

	plugins:[
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV:JSON.stringify('production'),
			},
		}),
		//new webpack.HotModuleReplacementPlugin(), //这玩意儿时灵时不灵=-=
	],
/*
	devServer:{
		contentBase:'./content',
		hot: true,
		inline: true, //跟上面那货一起…………
		historyApiFallback: true,
		port: 3000,
	},*/
};