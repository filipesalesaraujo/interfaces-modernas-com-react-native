import React from "react";

import arsenalImg from "../../assets/arsenal.png";

import { Container, Image, Title, Foundation } from "./styles";

export function Card() {
  return (
    <Container>
      <Image source={arsenalImg} resizeMode="contain" />
      <Title>Arsenal</Title>
      <Foundation>1886</Foundation>
    </Container>
  );
}
