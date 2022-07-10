var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
        clean: true,
    },
    module : {
		rules : [
			{ test :  /\.css$/, use : ['style-loader', 'css-loader']} ,
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },        
		]
	},
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To-do List App',
            template: './src/index.ejs', // Load a custom template (ejs by default)
        })
    ]
}