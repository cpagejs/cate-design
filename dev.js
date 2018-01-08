const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./dev.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}));
app.use(require("webpack-hot-middleware")(compiler, {
	path: config.output.publicPath,
	reload: true,
	dynamicPublicPath: true
}));

app.listen(3000, function () {
  console.log('http://localhost:3000');
});
