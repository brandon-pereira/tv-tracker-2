import React from "react";

import { Container, Genres, Genre } from "./ShowDetails.styles";

function ShowDetails({ show }) {
  return (
    <Container>
      <h1>{show.title}</h1>
      <Genres>
        {show.genres.map(genre => (
          <Genre key={genre}>{genre}</Genre>
        ))}
      </Genres>
      {show.description}

      <div>Start watching at episode:</div>
      <input type="checkbox" name="Next aired episode" />
      <input type="checkbox" name="This episode" />
    </Container>
  );
}

export default ShowDetails;
