import React from "react";
import styled from "styled-components";
import Flag from "./Flag";

export default {
  title: "Flag"
};

const Wrapper = styled.div`
  width: 120px;
`;
const props = {
  country: "Canadian"
};

export const defaultValue = () => <Flag />;
export const withWrapper = () => (
  <Wrapper>
    <Flag {...props} />
  </Wrapper>
);
