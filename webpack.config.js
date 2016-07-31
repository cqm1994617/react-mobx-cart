
module.exports = {
	entry: "./src/index.js",
	output: {
		path: './content',
		filename: '[name].bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.js$/, loader: 'babel-loader' },
			{ test: /\.jsx$/,loader: 'babel-loader!jsx-loader?harmony'},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
};
