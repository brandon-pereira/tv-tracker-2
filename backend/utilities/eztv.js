const axios = require('axios');

module.exports.getShowById = async id => {
    const show = await axios(`https://eztv.io/api/get-torrents`, {
        params: {
            imdb_id: id,
            limit: 100,
            page: 1
        }
    });
    return show.data;
};
