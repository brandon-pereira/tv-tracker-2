import React, { useState } from 'react';

import AddModal from '../AddModal/AddModal';

import { Container, Logo, Button, SearchButton } from './NavBar.styles';

function NavBar({ onAddShow }) {
    const [isSearching, setSearching] = useState(false);
    console.log(isSearching);
    return (
        <>
            <Container>
                <Logo>TV Tracker</Logo>
                {/* <Button>Search</Button> */}
                <SearchButton onClick={() => setSearching(true)} />
            </Container>
            <AddModal
                isOpen={isSearching}
                onClose={() => setSearching(false)}
                onAddShow={onAddShow}
            />
        </>
    );
}

export default NavBar;
