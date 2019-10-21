import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default {
  title: "Carousel"
};

const Element = styled.div`
  width: 400px;
  height: 600px;
  background: papayawhip;
`;

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  background: green;
`;

export const defaultValue = () => <Carousel />;

export const withItems = () => {
  const slides = [...Array(3)].map((el, i) => <Element key={i} />);
  return (
    <Wrapper>
      <Carousel slides={slides} />
    </Wrapper>
  );
};
