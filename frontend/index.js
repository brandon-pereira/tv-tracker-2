import React, { useState } from "react";
import { render } from "react-dom";

import TvShow from "./components/TvShow/TvShow";

import { send } from "./utilities/websocket";
import NavBar from "./components/NavBar/NavBar";
import ShowsContainer from './components/ShowsContainer/ShowsContainer';

const defaultShows = [
  {
    id: 1871,
    title: "Mr. Robot",
    genres: ["Drama", "Crime", "Thriller"],
    status: "Ended",
    image: {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/211/528026.jpg"}
  }
]
const App = () => {
  const [shows, setShows] = useState(defaultShows); // TODO: Move to server
  const onAddShow = show => {
    setShows(shows => [...shows, show]);
    // send({ type: "add-show", payload: show.id });
  };

  console.log(shows);

  return (
    <div>
      <NavBar onAddShow={onAddShow} />

      <ShowsContainer>
        {shows.map(show => (
          <TvShow key={show.id} id={show.id} title={show.title} image={show.image} genres={show.genres}></TvShow>
        ))}
      </ShowsContainer>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
