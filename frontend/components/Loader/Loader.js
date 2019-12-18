import React from "react";

import { Container, Box } from "./Loader.styles";

function Loader({ color }) {
  return (
    <Container>
      <Box color={color} />
      <Box color={color} />
      <Box color={color} />
      <Box color={color} />
    </Container>
  );
}

export default Loader;
