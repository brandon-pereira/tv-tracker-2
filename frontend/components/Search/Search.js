import React, { useState, useCallback } from "react";

import { Container, Input, Predictions } from "./Search.styles";
import useSearchPredictions from "../../hooks/useSearchPredictions";
import Loader from "../Loader/Loader";

import SearchPrediction from "./SearchPrediction";

function Search({ onAddShow }) {
  const [value, setValue] = useState("");
  const { loading, error, data } = useSearchPredictions(value);



  const isPredicting = Boolean(value);

  const onClose = useCallback(() => {
    setValue("");
  }, []);

  const onSelect = useCallback((result) => () => {
    console.log(result.id);
    onAddShow(result);
    setValue("");
  }, []);

  return (
    <Container onClick={onClose} isPredicting={isPredicting}>
      <Input
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <Predictions isPredicting={isPredicting}>
        {loading && <Loader color="#fff" />}
        {!loading &&
          data.map(result => <SearchPrediction key={result.id} {...result} onSelect={onSelect(result)} />)}
      </Predictions>
    </Container>
  );
}

export default Search;
