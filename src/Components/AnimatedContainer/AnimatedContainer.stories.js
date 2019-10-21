import React from "react";
import styled from "styled-components";
import AnimatedContainer from "./AnimatedContainer";

export default {
  title: "AnimatedContainer"
};

const Element = styled.div`
  width: 120px;
  height: 120px;
  background: papayawhip;
`;

const Container = styled.div`
  & > div {
    margin-left: 5px;
    float: left;
  }
`;

const props = {
  index: 0
};

export const defaultValue = () => <AnimatedContainer />;
export const withWrapper = () => (
  <AnimatedContainer {...props}>
    <Element />
  </AnimatedContainer>
);
export const list = () => (
  <Container>
    {[...Array(6)].map((el, i) => (
      <AnimatedContainer index={i}>
        <Element />
      </AnimatedContainer>
    ))}
  </Container>
);
