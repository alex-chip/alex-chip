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
			// {
			// 	test: /\.css$/,
			// 	use: ['style-loader', 'css-loader', 'sass-loader'],
			// 	exclude: /node_modules/
			// },
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
				// options: {
				// 	publicPath: 'src/assets',
				// 	outputPath: 'assets/img'
				// }
				// include: path.join(__dirname, 'src/assets')
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/pug/index.pug',
			filename: '../index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: 'app.css'
		})
	]
};
