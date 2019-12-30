import styled from 'styled-components';

import { QUERIES } from '../../utilities/constants';

export const Container = styled.div`
    position: relative;
    z-index: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${QUERIES.medium} {
        grid-template-columns: repeat(3, 1fr);
    }
    ${QUERIES.large} {
        grid-template-columns: repeat(4, 1fr);
    }
`;
