import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  animation-name: animateIn;
  animation-duration: 250ms;
  animation-delay: ${({ index }) => `${index * 50}ms`};
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }

    100% {
      opacity: 1;
    }
  }
`;

const AnimatedContainer = ({ index = 0, children }) => {
  return <Container index={index}>{children}</Container>;
};

AnimatedContainer.propTypes = {
  /* index of an array that is used to stagger animations */
  index: PropTypes.number,
  children: PropTypes.element
};

export default AnimatedContainer;
