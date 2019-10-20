import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryItem from "../Components/CategoryItem";
import { fetchCategories, fetchRandomMeal } from "../utils/ApiHelper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AnimatedContainer from "../Components/AnimatedContainer";
import Carousel from "Components/Carousel";

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  background: #5e72e4;
  padding: 50px 0 10px 0;
  margin-bottom: 60px;
  color: white;
`;

const RandomRecipe = styled.div`
  background: #172b4d;
  margin-bottom: 32px;
  overflow: hidden;
`;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    const fetchCategoryList = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    const fetchRandom = async () => {
      const data = await fetchRandomMeal(3);
      setRandomRecipes(data);
    };

    fetchRandom();
    fetchCategoryList();
  }, []);

  return (
    <>
      <HeaderContainer>
        <Container>
          <Typography variant="h6" gutterBottom>
            &nbsp;
          </Typography>
          <Typography variant="h4" gutterBottom>
            Looking for something new to try?
          </Typography>
        </Container>
      </HeaderContainer>
      {randomRecipes && (
        <RandomRecipe>
          <Carousel slides={randomRecipes} />
        </RandomRecipe>
      )}
      <HeaderContainer>
        <Container>
          <Typography variant="h6" gutterBottom>
            &nbsp;
          </Typography>
          <Typography variant="h4" gutterBottom>
            What are you in the mood for tonight?
          </Typography>
        </Container>
      </HeaderContainer>
      <StyledContainer>
        <Grid container spacing={6}>
          {categories.map((category, i) => (
            <Grid item lg={3} md={4} xs={6} key={category.categoryId}>
              <AnimatedContainer index={i}>
                <CategoryItem {...category} />
              </AnimatedContainer>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Home;
