const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
	const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

	module.exports = {
	  output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'main.js'
	  },
	  entry: {
		main: './src/index.js'
	  },
      plugins: [
          new HtmlWebpackPlugin({  
            filename: 'index.html',
            template: 'src/index.html',
            hash: true
          }),
          new MiniCSSExtractPlugin({
              filename: "style.css",
          })
      ],
      module: {
          rules: [
          { 
              test: /\.scss$/, 
              loader: [
                MiniCSSExtractPlugin.loader,
                "css-loader",
                'sass-loader'
              ]
          }
          ]
      }
	}