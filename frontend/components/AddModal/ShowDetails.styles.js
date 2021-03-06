import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 2rem 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-sizing: border-box;
    overflow-y: scroll;
    width: 100%;
    h1 {
        margin: 0;
    }
`;

export const Genres = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Genre = styled.li`
    display: inline-block;
    border: 1px solid #ccc;
    padding: 0.2rem;
    margin-right: 0.2rem;
    color: #666;
    border-radius: 3px;
`;

export const Header = styled.div`
    display: flex;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

export const Results = styled.div`
    border: 1px solid #ccc;
    flex: 1;
    overflow-y: scroll;
`;

export const Result = styled.div`
    padding: 0.3rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    &:nth-of-type(even) {
        background: #f1f1f1;
    }
`;
