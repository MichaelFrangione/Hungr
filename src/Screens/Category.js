import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchByCategory } from "../utils/ApiHelper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AnimatedContainer from "../Components/AnimatedContainer";
import GridItem from "Components/GridItem";
import AppHeader from "Components/AppHeader";
import ErrorModal from "Components/ErrorModal/ErrorModal";

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.green};
  min-height: 150px;
  padding-top: 64px;
  padding-bottom: 32px;
  margin-bottom: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Category = ({ categoryName, description }) => {
  const [meals, setMeals] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchByCategory(categoryName);
        setMeals(data);
      } catch (err) {
        setHasError(true);
      }
    };
    fetchData();
  }, [categoryName]);

  return (
    <>
      {hasError && <ErrorModal />}
      <AppHeader />
      <HeaderContainer>
        <Container>
          <Typography variant="h4" gutterBottom>
            Here Are Some Great <strong>{categoryName}</strong> Recipes
          </Typography>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
        </Container>
      </HeaderContainer>
      <StyledContainer>
        <Grid container spacing={6}>
          {meals.map((meal, i) => (
            <Grid item lg={3} md={4} xs={6} key={meal.mealId}>
              <AnimatedContainer index={i}>
                <GridItem {...meal} linkToUrl={`/meal/${meal.mealId}`} />
              </AnimatedContainer>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Category;
