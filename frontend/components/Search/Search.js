import React, { useState, useCallback, useEffect } from "react";

import {
  Container,
  Input,
  ShowDetails,
  BackgroundMask,
  Screen,
  Predictions
} from "./Search.styles";
import useSearchPredictions from "../../hooks/useSearchPredictions";
import Loader from "../Loader/Loader";

import SearchPrediction from "./SearchPrediction";

function AddShowModal({ isOpen, onClose, onAddShow }) {
  const [searchValue, setSearchValue] = useState("");
  const [currentShow, setCurrentShow] = useState(null);

  const { loading, error, data } = useSearchPredictions(searchValue);

  const _onClose = useCallback(() => {
    onClose();
    setSearchValue("");
    setCurrentShow(null);
  }, [onClose]);

  const onSelectShow = useCallback(
    result => () => {
      console.log(result.id);

      // onAddShow(result);
    },
    []
  );

  const onShowDetails = useCallback(
    result => () => {
      console.log(result);
      setSearchValue("");
      setCurrentShow(result);
    },
    []
  );

  console.log({ isOpen, currentShow });
  return (
    <Container isOpen={isOpen}>
      <BackgroundMask onClick={_onClose} />
      <Screen direction="ltr" visible={!currentShow}>
        <Input
          isActive={isOpen}
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value);
          }}
        />

        <Predictions isPredicting={!currentShow}>
          {loading && <Loader color="#fff" />}
          {!loading &&
            data.map(result => (
              <SearchPrediction
                key={result.id}
                {...result}
                onSelect={onShowDetails(result)}
              />
            ))}
        </Predictions>
      </Screen>
      <Screen direction="rtl" visible={currentShow}>
        {currentShow && (
          <ShowDetails>
            <h1>{currentShow.title}</h1>
          </ShowDetails>
        )}
      </Screen>
    </Container>
  );
}

export default AddShowModal;
