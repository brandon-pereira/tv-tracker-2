const fs = require("fs");
const TvMaze = require('../utilities/tv-maze');
const EZTV = require('../utilities/eztv');
const _torrent = require('../utilities/torrent');

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
    const send = ({ type, ...data }) => ws.send(JSON.stringify({ type, ...data }));
    ws.on("message", blob => {
      const { type, payload } = JSON.parse(blob);
      console.log({ type, payload });
      addShow(payload, { ws, send, torrent })
    });

    // send({ type: "test", payload: { time: Date.now() } });
  });
};


async function addShow(showId, { ws, send, torrent }) {

  console.log(showId);
  const show = await TvMaze.getShowById(showId);
  console.log(show.externals.imdb);
  const eztv = await EZTV.getShowById(show.externals.imdb.replace('tt', ''));
  // console.log(eztv);
  console.log(eztv.torrents[0].magnet_url);
  _torrent(eztv.torrents[0].magnet_url, showId, { torrent, ws,  send })

}