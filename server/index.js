const express = require('express');
const path = require('path')
const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);

const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

const port = process.env.NODE_ENV === 'development' ? 4200 : 6969;
app.listen(port, () => console.log(`server listening at http://localhost:${port}`));


