import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.02);
  }

  a {
    text-decoration: none;
  }

  h4 {
    width: 100%;
    text-align: center;
    color: #525f7f;
    pointer-events: none;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const MealItem = ({ name, thumbnail, index, mealId }) => {
  return (
    <Container index={index}>
      <Link to={`/meal/${mealId}`}>
        <img src={thumbnail} alt={name} />
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
      </Link>
    </Container>
  );
};

export default MealItem;
