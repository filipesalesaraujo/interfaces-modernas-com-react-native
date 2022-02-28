import React from "react";

import { Container, Header, Content } from "./styles";

import { Input } from "../../components/Input";

import coverImg from "../../assets/cover.png";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Input placeholder="teste" />
      </Header>
      <Content>
        <Card />
      </Content>
    </Container>
  );
}
