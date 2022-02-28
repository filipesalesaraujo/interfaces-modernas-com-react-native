import React from "react";

import { Container, Header, Title } from "./styles";

import coverImg from "../../assets/cover.png";

export function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Title>Teste</Title>
      </Header>
    </Container>
  );
}
