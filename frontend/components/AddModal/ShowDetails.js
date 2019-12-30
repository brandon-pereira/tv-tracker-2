import React from 'react';

import { Container, HeaderContent, Header, Genres, Genre } from './ShowDetails.styles';
import SearchImage from './SearchImage';
import useEpisodes from '../../hooks/useEpisodes';

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

            <div>Start watching at episode:</div>
            <input type="checkbox" name="Next aired episode" />
            <input type="checkbox" name="This episode" />
            <div>{data && data.map(e => <div key={e.id}>{e.title}</div>)}</div>
        </Container>
    );
}

export default ShowDetails;
