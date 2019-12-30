import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: relative;
    &:before {
        display: block;
        content: '';
        width: 100%;
        padding-top: calc(3 / 2 * 100%);
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    // object-fit: cover;
    // width: 100%;
    // height: 100%;
`;

export const Content = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    padding: 1rem;
    box-sizing: border-box;
`;
