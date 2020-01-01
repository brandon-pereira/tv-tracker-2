import React from 'react';

import {
    Container,
    HeaderContent,
    Results,
    Result,
    Header,
    Genres,
    Genre
} from './ShowDetails.styles';
import SearchImage from './SearchImage';
import useEpisodes from '../../hooks/useEpisodes';
import Loader from '../Loader/Loader';

function ShowDetails({ show }) {
    const { data, loading, error } = useEpisodes(show.id);
    console.log(data, loading, error);
    return (
        <Container>
            <Header>
                <SearchImage image={show.image} />
                <HeaderContent>
                    <h1>{show.title}</h1>
                    <Genres>
                        {show.genres.map(genre => (
                            <Genre key={genre}>{genre}</Genre>
                        ))}
                    </Genres>
                </HeaderContent>
            </Header>
            <div dangerouslySetInnerHTML={{ __html: show.description }} />
            <div>
                <div>Start watching at episode:</div>

                <input type="radio" id="next" name="episode" />
                <label for="next">Next aired episode</label>
                <input type="radio" name="episode" id="specific" />
                <label for="specific">Specific episode</label>
            </div>

            <Results>
                {error && <div>ERROR {error}</div>}
                {loading && <Loader />}
                {data && data.map(e => <Result key={e.id}>{e.title}</Result>)}
            </Results>
        </Container>
    );
}

export default ShowDetails;
