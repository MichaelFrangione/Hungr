import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchByCategory } from "../utils/ApiHelper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AnimatedContainer from "../Components/AnimatedContainer";
import MealItem from "Components/MealItem";

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  background: #2dce89;
  padding: 50px 0 10px 0;
  margin-bottom: 60px;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Category = ({ categoryName }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchByCategory(categoryName);
      setMeals(data);
    };
    fetchData();
  }, [categoryName]);

  return (
    <>
      <HeaderContainer>
        <Container>
          <Link to={"/"}>
            <Typography variant="h6" gutterBottom>
              Back
            </Typography>
          </Link>
          <Typography variant="h4" gutterBottom>
            Here Are Some Great <strong>{categoryName}</strong> Recipes
          </Typography>
        </Container>
      </HeaderContainer>
      <StyledContainer>
        <Grid container spacing={6}>
          {meals.map((meal, i) => (
            <Grid item lg={3} md={4} xs={6} key={meal.mealId}>
              <AnimatedContainer index={i}>
                <MealItem {...meal} />
              </AnimatedContainer>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Category;
