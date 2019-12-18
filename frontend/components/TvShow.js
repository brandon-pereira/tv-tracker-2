import React from 'react';

import useSubscription from '../hooks/useSubscription';

import { Container } from './TvShow.styles';

function TvShow({ title }) {
    console.log("HERE");
    useSubscription('test', (data) => {
        console.log("HELLO", data);
    })
    return <Container>
        {title}
        <progress max="100" value="50"></progress>
    </Container>
}

export default TvShow;