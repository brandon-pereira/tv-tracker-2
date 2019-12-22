import React, { useState } from "react";

import Search from "../Search/Search";

import { Container, Logo, Button, SearchButton } from "./NavBar.styles";

function NavBar({ onAddShow }) {
  const [isSearching, setSearching] = useState(false);
  return (
    <>
      <Container>
        <Logo>TV Tracker</Logo>
        {/* <Button>Search</Button> */}
        <SearchButton onClick={() => setSearching(true)} />
      </Container>
      <Search
        isActive={isSearching}
        onClose={() => setSearching(false)}
        onAddShow={onAddShow}
      />
    </>
  );
}

export default NavBar;
