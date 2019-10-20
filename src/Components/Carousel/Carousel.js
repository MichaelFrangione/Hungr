import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import MealInfo from "Components/MealInfo";

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

const Carousel = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%"
  };

  return (
    <StyledSlider {...settings}>
      {slides.map((slide, i) => (
        <MealInfo meal={slide} isCarousel key={i} />
      ))}
    </StyledSlider>
  );
};

export default Carousel;
