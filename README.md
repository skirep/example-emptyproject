Create GitHub repository

Pull on local
	mkdir example-emptyproject
	cd example-emptyproject
	git init
	git remote add origin https://github.com/jordisabadell/example-emptyproject
	git pull origin master

Open VSCode IDE
    Add folder to workpace...
    Menu > Terminal > New terminal

Initialize project
	npm init
	npm i --save-dev webpack webpack-cli

Create src folder and index.js file
	src/index.js

Add dummy log
	console.log("hello world")

Test 
	webpack --mode development

Edit package.json
	"scripts": {
	   "build": "webpack --mode production",
	   "builddev": "webpack --mode development"
	 },
 
Create webpack configuration file
	webpack.config.js
	
Add webpack configuration lines
    const path = require('path');

	module.exports = {
	  output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'main.js'
	  },
	  entry: {
		main: './src/index.js'
	  }
	}

Create Sass file
	src/style.scss
	
Add dummy style
	body {
		color: red;
	}
	
Install plugin and loaders
	npm install -D html-webpack-plugin
	npm install -D mini-css-extract-plugin
	npm install -D css-loader
	npm install -D node-sass sass-loader

Add webpack configuration lines at webpack.config.js

	...	
	const HtmlWebpackPlugin = require('html-webpack-plugin');
	const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
	
	
	module.exports = {
	output: {
		...
	},
	entry: {
		...
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

Add import CSS file at src/index.js
	import './style.scss';
	
Create HTML file
	src/index.html
	
Add HTML content

	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <title>Example</title>
	  
	</head>
	<body>
	  <h1>Hello world</h1>
	</body>
	</html>
	
Install server 
	npm install -D webpack-dev-server
	
Add webpack server configuration at package.json
	"scripts": {
		...
		"start": "webpack-dev-server --mode development --open"
	},

