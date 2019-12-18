module.exports = ({ torrent, ws }) => {
  torrent.add(
    magnetUrl,
    {
      // path: this.options.downloadLocation
    },
    torrent => {
      torrent.on("ready", () => {
        ws.send(JSON.stringify({ magnetUrl, ready: true }));
      });

      torrent.on("download", function(bytes) {
        console.log("total downloaded: " + torrent.downloaded);
        console.log("download speed: " + torrent.downloadSpeed);
        console.log("progress: " + torrent.progress);
        ws.send(
          JSON.stringify({ magnetUrl, progress: torrent.progress * 100 })
        );
      });

      torrent.on("done", function() {
        console.log("torrent finished downloading");
        // console.log(torrent);
        const file = torrent.files.find(function(file) {
          return file.name.endsWith(".mkv");
        });
        console.log(file.path, torrent.path);
        ws.send(
          JSON.stringify({ magnetUrl, isCompleted: true, progress: 100 })
        );
        // process.exit(0);
      });
    }
  );
};
