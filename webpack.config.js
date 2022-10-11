var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
    },
    module: {
        rules: [
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          { test: /\.css$/i,
          use: ['style-loader', 'css-loader'],}  
        ],
      },
      devServer: {
        static: './dist',
      },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To-do List App',
            template: './src/index.html', // Load a custom template (ejs by default)
        })
    ]
}