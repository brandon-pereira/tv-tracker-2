import React, { useState, useCallback, useEffect } from "react";

import { Container, Input, BackgroundMask, Predictions } from "./Search.styles";
import useSearchPredictions from "../../hooks/useSearchPredictions";
import Loader from "../Loader/Loader";

import SearchPrediction from "./SearchPrediction";

function Search({ isActive, onClose, onAddShow }) {
  const [value, setValue] = useState("");
  const { loading, error, data } = useSearchPredictions(value);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setValue("mr");
  //   }, 1000);
  // }, []);
  const isPredicting = isActive;

  const _onClose = useCallback(() => {
    onClose();
    setValue("");
  }, []);

  const onSelect = useCallback(
    result => () => {
      console.log(result.id);
      onAddShow(result);
      setValue("");
    },
    []
  );

  return (
    <Container onClick={_onClose} isPredicting={isPredicting}>
      <Input
        isPredicting={isPredicting}
        value={value}
        onClick={e => e.stopPropagation()}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <BackgroundMask />
      <Predictions isPredicting={isPredicting}>
        {loading && <Loader color="#fff" />}
        {!loading &&
          data.map(result => (
            <SearchPrediction
              key={result.id}
              {...result}
              onSelect={onSelect(result)}
            />
          ))}
      </Predictions>
    </Container>
  );
}

export default Search;
