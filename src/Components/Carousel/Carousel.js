import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  height: 600px;
  .slick-slide {
    opacity: 0.3;
    transition: opacity 500ms ease-in-out;

    &.slick-active {
      opacity: 1;
    }
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10%"
};

const Carousel = ({ slides }) => {
  return <StyledSlider {...settings}>{slides}</StyledSlider>;
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element)
};

export default Carousel;
