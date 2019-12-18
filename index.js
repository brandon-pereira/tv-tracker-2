const { menubar } = require('menubar');

const mb = menubar({
    index: `file://${process.cwd()}/frontend/index.html`
});

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});

mb.on('after-create-window', () => {
  mb.window.openDevTools()
});

require('./server');