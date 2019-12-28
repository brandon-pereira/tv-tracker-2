const tvMaze = require("../utilities/tv-maze");

module.exports = app => {
  app.get("/api/search", async (req, res) => {
    const raw = await tvMaze.searchShowsByName(req.query.query);
    const results = raw
      .filter(s => s && s.show && s.show.externals && s.show.externals.imdb)
      .map(r => {
        const show = r.show;
        console.log(show);
        // we use imdb ids everywhere internally
        const id = show.externals.imdb;
        // Return show data
        return {
          id,
          status: show.status,
          title: show.name,
          genres: show.genres,
          status: show.status,
          image: show.image,
          description: show.summary
        };
      });
    res.json(results);
  });
};
