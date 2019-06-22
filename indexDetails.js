import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from "./styles";

import iconx from "../../assets/iconx.png";

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>#VaideBike</TypeTitle>
        <TypeDescription>#SaudeESeguranca</TypeDescription>

        <TypeImage source={iconx} />
        <TypeTitle>BikeSafetyX</TypeTitle>
        <TypeDescription>FREE CO2</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SIMBORA PEDALAR!</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
