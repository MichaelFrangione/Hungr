import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IngredientsList from "Components/IngredientsList";
import MealInfo from "Components/MealInfo";
import AppHeader from "Components/AppHeader";

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
  margin-bottom: 50px;

  p {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }
`;

const StyledMealInfo = styled(MealInfo)`
  margin: 32px 0;
`;

const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.green};
  padding: 50px 0 10px 0;
  margin-bottom: 60px;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Meal = ({ meal }) => {
  return (
    <>
      <AppHeader />
      <HeaderContainer>
        <Container>
          <Typography variant="h4" gutterBottom>
            <strong>{meal && meal.name}</strong>
          </Typography>
        </Container>
      </HeaderContainer>
      <StyledContainer>
        <Grid container spacing={6}>
          {meal && (
            <>
              <StyledMealInfo meal={meal} />
              <Grid container spacing={0}>
                <Grid item sm={4} xs={12}>
                  <IngredientsList ingredients={meal.ingredients} />
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Typography variant="h4" gutterBottom>
                    Directions
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ whiteSpace: "pre-wrap" }}
                    dangerouslySetInnerHTML={{ __html: meal.instructions }}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Meal;
