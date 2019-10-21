import React from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

export default {
  title: "GridItem"
};

const Wrapper = styled.div`
  width: 200px;
`;
const props = {
  name: "test",
  thumbnail: "https://www.themealdb.com/images/category/beef.png",
  linkToUrl: "/"
};

export const defaultValue = () => <GridItem {...props} />;
export const withWrapper = () => (
  <Wrapper>
    <GridItem {...props} />
  </Wrapper>
);
