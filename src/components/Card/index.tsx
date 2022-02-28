import React from "react";

import arsenalImg from "../../assets/arsenal.png";

import { Container, Image, Title, Foundation } from "./styles";

export function Card() {
  return (
    <Container animation="slideInDown" duration={2000}>
      <Image
        source={arsenalImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        iterationCount="infinite"
      />
      <Title>Arsenal</Title>
      <Foundation>1886</Foundation>
    </Container>
  );
}
