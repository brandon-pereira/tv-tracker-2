  
const axios = require('axios');

module.exports.searchShowsByName = async (name) => {
    let resp = await axios("https://api.tvmaze.com/search/shows?q=" + name)
    return resp.data;
}
module.exports.getShowById = async (show_id) => {
    let resp = await axios("https://api.tvmaze.com/shows/" + show_id)
    return resp.json();
}

module.exports.getEpisode = async (episode_id) => {
    if(episode_id.startsWith('http')) {
        episode_id = episode_id.substr(episode_id.lastIndexOf('/') + 1);
    }
    let resp = await axios("https://api.tvmaze.com/episodes/" + episode_id);
    return resp.json();
}