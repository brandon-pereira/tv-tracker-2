const fs = require('fs');

module.exports = ({app, torrent}) => {

    app.get('/api/file/:path', (req, res) => {
        console.log(req.params.path)
        res.setHeader("content-type", "video/webm");
        fs.createReadStream('/tmp/webtorrent/232dfed556bd0db107adf5d1fb15673b00281fab/Mr.Robot.S04E10.iNTERNAL.480p.x264-mSD[eztv].mkv').pipe(res);
    })

    app.ws('/api/download', (ws) => {
        ws.on('message', (blob) => {
            const { type, magnetUrl } = JSON.parse(blob);
                console.log(type);
            console.log('received magnet url:', magnetUrl);
            torrent.add(magnetUrl, {
                // path: this.options.downloadLocation
            }, (torrent) => {
                torrent.on('ready', () => {
                    ws.send(JSON.stringify({ magnetUrl, ready: true }));
                });
    
                torrent.on('download', function (bytes) {
                    console.log('total downloaded: ' + torrent.downloaded);
                    console.log('download speed: ' + torrent.downloadSpeed)
                    console.log('progress: ' + torrent.progress)
                    ws.send(JSON.stringify({magnetUrl, progress: torrent.progress * 100 }));
                });
                
                torrent.on('done', function(){
                    console.log('torrent finished downloading');
                    // console.log(torrent);
                    const file = torrent.files.find(function (file) {
                        return file.name.endsWith('.mkv')
                      })
                      console.log(file.path, torrent.path);
                    ws.send(JSON.stringify({magnetUrl, isCompleted: true, progress: 100 }));
                    // process.exit(0);
                });
            })
        });

        setInterval(() => {
        ws.send(JSON.stringify({type: 'test', payload: { time: Date.now() }}));
        }, 500);
    });
}
