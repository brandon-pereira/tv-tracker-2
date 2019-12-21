  
const axios = require('axios');

module.exports.getShowById = async (id) => {
    const show = await axios("https://eztv.io/api/get-torrents?imdb_id=" + id)
    // console.log(show);
    return show.data;
}