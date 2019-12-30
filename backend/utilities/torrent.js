module.exports = (magnetUrl, showId, { torrent, send }) => {
    const type = `torrent-${showId}`;
    torrent.add(
        magnetUrl,
        {
            // path: this.options.downloadLocation
        },
        torrent => {
            torrent.on('ready', () => {
                send({ type, ready: true });
            });

            torrent.on('download', function() {
                console.log('total downloaded: ' + torrent.downloaded);
                console.log('download speed: ' + torrent.downloadSpeed);
                console.log('progress: ' + torrent.progress);
                send({ type, progress: torrent.progress * 100 });
            });

            torrent.on('done', function() {
                console.log('torrent finished downloading');
                // console.log(torrent);
                const file = torrent.files.find(function(file) {
                    return file.name.endsWith('.mkv');
                });
                console.log(file.path, torrent.path);
                send({ type, isCompleted: true, progress: 100 });
            });
        }
    );
};
