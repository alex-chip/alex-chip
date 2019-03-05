const HtmlWebPackPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: `${__dirname}/dist`,
		filename: './js/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize : true }
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader','css-loader','sass-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
				// options: {
				// 	publicPath: `${__dirname}/src/assets/img`,
				// 	outputPath: `${__dirname}/dist/assets/img`
				// },
				// include: `${__dirname}/src/assets`
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/pug/index.pug',
			filename: `${__dirname}/index.html`
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: 'app.css'
		})
	]
};
