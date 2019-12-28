const EZTV = require("../utilities/eztv");

module.exports = app => {
  app.get("/api/episodes/:id", async (req, res) => {
    let showId = req.params.id;
    // eztv api doesn't support the tt in imdb ids
    showId = showId.replace("tt", "");
    // Get show episodes from showId
    const data = await EZTV.getShowById(showId);
    // Parse results
    if (!data) {
      res.status(500).text("No results");
    }
    let results = data.torrents;
    results = results.map(t => {
      const isHD = /720p|1080p/.test(t.title);
      return {
        id: t.id,
        title: t.title,
        isHD,
        season: t.season,
        episode: t.episode,
        seeds: t.seeds,
        peers: t.peers,
        releaseDate: new Date(t.date_released_unix * 1000),
        magnetUrl: t.magnet_url
      };
    });
    // results = results.filter(r => r.isHD === false);
    res.json(results);
  });
};
