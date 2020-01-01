import React, { useState, useCallback, useEffect } from 'react';

import {
    Container,
    Input,
    BackgroundMask,
    BackButton,
    Screen,
    Predictions
} from './AddModal.styles';

import useSearchPredictions from '../../hooks/useSearchPredictions';
import Loader from '../Loader/Loader';
import ShowDetails from './ShowDetails';

import SearchPrediction from './SearchPrediction';

function AddShowModal({ isOpen, onClose, onAddShow }) {
    const [searchValue, setSearchValue] = useState('');

    const [currentShow, setCurrentShow] = useState({
        id: 'tt4158110',
        status: 'Ended',
        title: 'Mr. Robot',
        genres: ['Drama', 'Crime', 'Thriller'],
        image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/211/528026.jpg'
        },
        description:
            '<p><b>Mr. Robot</b> follows Elliot, a young programmer who works as a cyber-security engineer by day and as a vigilante hacker by night. Elliot finds himself at a crossroads when the mysterious leader of an underground hacker group recruits him to destroy the firm he is paid to protect. Compelled by his personal beliefs, Elliot struggles to resist the chance to take down the multinational CEOs he believes are running (and ruining) the world.</p>'
    });

    const { loading, error, data } = useSearchPredictions(searchValue);

    const _onClose = useCallback(() => {
        onClose();
        setSearchValue('');
        setCurrentShow(null);
    }, [onClose]);

    const onSelectShow = useCallback(
        result => () => {
            console.log(result.id);
            onAddShow(result);
            _onClose();
        },
        [_onClose, onAddShow]
    );

    const onShowDetails = useCallback(
        result => () => {
            console.log(result);
            setCurrentShow(result);
        },
        []
    );

    const onBackToSearch = useCallback(() => {
        setCurrentShow(null);
    }, []);

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
                <BackButton onClick={onBackToSearch}>Back</BackButton>
                {currentShow && <ShowDetails show={currentShow}></ShowDetails>}
            </Screen>
        </Container>
    );
}

export default AddShowModal;
