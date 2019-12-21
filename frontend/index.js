import React, { useState } from "react";
import { render } from "react-dom";

import Search from "./components/Search/Search";
import TvShow from "./components/TvShow/TvShow";

import {send} from './utilities/websocket';

const App = () => {
  const [shows, setShows] = useState([]); // TODO: Move to server
  const onAddShow = (show) => {
    setShows(shows => [...shows, show]);
    send({ type: 'add-show', payload: show.id });
  }
  
  console.log(shows);

  return ( 
    <div>
      <Search onAddShow={onAddShow} />
      {shows.map(show => <TvShow key={show.id} id={show.id} title={show.title}></TvShow>)}
    </div>
  );
}


render(
  <App />,
  document.querySelector("#app")
);
