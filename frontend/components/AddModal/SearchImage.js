import React from 'react';
import styled from 'styled-components';

const TRANSPARENT_PNG = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=`;

const Image = styled.img`
    margin-right: 1rem;
    height: 120px;
    width: 82px;
    background: linear-gradient(#222, #000);
`;

function SearchImage({ image }) {
    if (image) {
        return <Image src={image.small || image.medium || image.original} />;
    }
    return <Image src={TRANSPARENT_PNG} />;
}

export default SearchImage;
