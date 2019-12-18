import React from "react";
import { Prediction } from "./Search.styles";

function SearchPrediction({ id, image, title, onSelect }) {
  console.log(image);
  return (
    <Prediction
      onClick={e => {
        e.stopPropagation();
        onSelect(id);
      }}
    >
      {image && <img src={image.small || image.medium || image.original} />}
      {title}
    </Prediction>
  );
}

export default SearchPrediction;
