const fs = require("fs");
const TvMaze = require("../utilities/tv-maze");
const EZTV = require("../utilities/eztv");
const _torrent = require("../utilities/torrent");

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
    const send = ({ type, ...data }) =>
      ws.send(JSON.stringify({ type, ...data }));

    // On inbound message, parse and delegate
    ws.on("message", blob => {
      const { type, payload } = JSON.parse(blob);
      dispatchEvent(type, payload, { ws, send, torrent });
    });

    // Send a successful connection message
    send({ type: "status", payload: { connected: true, time: Date.now() } });
  });
};

async function dispatchEvent(type, payload, { ws, send, torrent }) {
  if (!type) {
    console.warn("No type provided to websocket connection.");
    return;
  }
  switch (type) {
    case "add-show":
      addShow(payload.showId);
      break;
    default:
      console.warn(`No handler for type "${type}" in websocket connection.`);
      break;
  }
}

async function addShow(showId, { ws, send, torrent }) {
  console.log(showId);
  // eztv api doesn't support the tt in imdb ids
  showId = showId.replace("tt", "");
  // Get show episodes from showId
  const results = await EZTV.getShowById(showId);

  // console.log(eztv);
  console.log(results.torrents[0].magnet_url);
  // _torrent(results.torrents[0].magnet_url, showId, { torrent, ws, send });
}
