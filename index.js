const { menubar } = require('menubar');

const mb = menubar({
    dir: `dist/`
    // index: `file://${process.cwd()}/dist/index.html`
});

mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
});

mb.on('after-create-window', () => {
    mb.window.openDevTools();
});

require('./server');
