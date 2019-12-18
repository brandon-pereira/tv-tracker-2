import React from "react";
import { render } from "react-dom";

import Search from "./components/Search/Search";
import TvShow from "./components/TvShow/TvShow";

render(
  <div>
    <Search />
    <TvShow title="Mr. Robot"></TvShow>
  </div>,
  document.querySelector("#app")
);
