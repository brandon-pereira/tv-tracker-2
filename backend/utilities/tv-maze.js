  
const fetch = require('node-fetch');

module.exports.searchShowsByName = async (name) => {
    let show = await fetch("https://api.tvmaze.com/search/shows?q=" + name)
    shows = await show.json();
    return shows;
}
module.exports.getShowById = async (show_id) => {
    let show = await fetch("https://api.tvmaze.com/shows/" + show_id)
    show = await show.json();
    return show;
}

module.exports.getEpisode = async (episode_id) => {
    if(episode_id.startsWith('http')) {
        episode_id = episode_id.substr(episode_id.lastIndexOf('/') + 1);
    }
    let episode = await fetch("https://api.tvmaze.com/episodes/" + episode_id);
    episode = await episode.json();
    return episode;
}