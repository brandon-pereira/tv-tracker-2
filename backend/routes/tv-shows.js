const tvMaze = require("../utilities/tv-maze");

module.exports = app => {
  app.get("/api/search", async (req, res) => {
    console.log("HERE", req.query);
    const raw = await tvMaze.searchShowsByName(req.query.query);
    const results = raw.map(r => {
      const show = r.show;
      return {
        id: show.id,
        title: show.name,
        genres: show.genres,
        status: show.status,
        image: show.image
      };
    });
    res.json(results);
  });
};
