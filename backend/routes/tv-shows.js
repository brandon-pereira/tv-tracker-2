const tvMaze = require('../apis/tv-maze');

module.exports = (app) => {
    app.get('/api/shows', async (req, res) => {
        const d = await tvMaze.searchShowsByName("mr");
        res.json(d);
    })
}