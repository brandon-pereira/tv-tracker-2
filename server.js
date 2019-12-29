const Bundler = require('parcel-bundler');
const express = require('express');
const WebTorrent = require('webtorrent');

const app = express();
const torrent = new WebTorrent();

require('express-ws')(app);

require('./backend/routes/websocket')({ app, torrent });
require('./backend/routes/search')(app);
require('./backend/routes/episodes')(app);

// Bundler
const bundler = new Bundler('frontend/index.html', { watch: true, hmr: true });
app.use(bundler.middleware());

app.listen(8000);
