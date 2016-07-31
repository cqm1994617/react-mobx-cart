
module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080",
		"./src/index.js",
	],
	output: {
		path: './content',
		filename: '[name].bundle.js',
		publicPath: "/test/",
	},
	module: {
		loaders: [
			{ 
				test: /\.css$/,
				loader: "style!css" ,
			},
			{
				test: /\.js$/, 
				loader: 'babel-loader' ,
				query:{
       				presets: ['es2015','react'],
      			},
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
	watch: true,
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		hot: true,
		inline: true
	}
};
