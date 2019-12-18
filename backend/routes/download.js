const fs = require("fs");

module.exports = ({ app, torrent }) => {
  app.get("/api/file/:path", (req, res) => {
    console.log(req.params.path);
    res.setHeader("content-type", "video/webm");
    fs.createReadStream(
      "/tmp/webtorrent/232dfed556bd0db107adf5d1fb15673b00281fab/Mr.Robot.S04E10.iNTERNAL.480p.x264-mSD[eztv].mkv"
    ).pipe(res);
  });

  app.ws("/ws", ws => {
    console.log("Connected.");
    ws.on("message", blob => {
      const { type, magnetUrl } = JSON.parse(blob);
      console.log(type);
      console.log("received magnet url:", magnetUrl);
    });

    ws.send(JSON.stringify({ type: "test", payload: { time: Date.now() } }));
  });
};
