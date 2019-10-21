import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { IngredientsType } from "Components/Types";

const IngredientsContainer = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
  color: #9a9a9a;

  li {
    padding: 8px 0;
    border-bottom: 2px solid #f4f4f4;
  }

  span {
    font-weight: bold;
    color: #000;
  }
`;

const Container = styled.div`
  padding: 0 32px;
`;

const IngredientsList = ({ ingredients }) => {
  return (
    <Container>
      <Typography variant="h4">Ingredients</Typography>
      <IngredientsContainer>
        {ingredients.map((ing, i) => (
          <li key={i}>
            <Typography variant="h6">
              <span>{ing.measurement}</span>&nbsp;{ing.ingredient}
            </Typography>
          </li>
        ))}
      </IngredientsContainer>
    </Container>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(IngredientsType)
};

export default IngredientsList;
