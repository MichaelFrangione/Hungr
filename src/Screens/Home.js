import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryItem from "../Components/CategoryItem";
import {
  fetchCategories,
  fetchRandomMeal,
  fetchFavorites
} from "../utils/ApiHelper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AnimatedContainer from "../Components/AnimatedContainer";
import Carousel from "Components/Carousel";
import SectionDivider from "Components/SectionDivider";
import { useStateValue } from "../Providers/StateProvider";
import Header from "Components/Header";

const StyledContainer = styled(Container)`
  min-height: 150px;
  align-content: center;
  justify-content: center;
  margin: 32px 0;
`;

const RandomRecipe = styled.div`
  background: #172b4d;
  margin-bottom: 32px;
  overflow: hidden;
`;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [favoritesList, setfavoritesList] = useState([]);
  const [{ favorites }] = useStateValue();

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

  useEffect(() => {
    const fetchFavoritesList = async () => {
      const data = await fetchFavorites(favorites);
      setfavoritesList(data);
    };
    fetchFavoritesList();
  }, [favorites]);

  return (
    <>
      <Header />
      <SectionDivider
        backgroundColor="#8965e0"
        heading="Looking to try something new?"
        subHeading="Heres a few of our most popular meals"
      />
      {randomRecipes && (
        <RandomRecipe>
          <Carousel slides={randomRecipes} />
        </RandomRecipe>
      )}
      <SectionDivider
        heading="My Favorites"
        subHeading="Here are your favorited meals"
        backgroundColor="#2dce89"
      />
      <StyledContainer>
        {favoritesList && favoritesList.length > 0 ? (
          <Grid container spacing={6}>
            {favoritesList.map((favorite, i) => (
              <Grid item lg={3} md={4} xs={6} key={favorite.mealId}>
                <AnimatedContainer index={i}>
                  <CategoryItem
                    {...favorite}
                    linkToUrl={`/meal/${favorite.mealId}`}
                  />
                </AnimatedContainer>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h5">
            You haven't added any favorites yet.
          </Typography>
        )}
      </StyledContainer>

      <SectionDivider
        heading="What are you in the mood for tonight?"
        subHeading="Here you can find meals in various categories"
      />
      <StyledContainer>
        <Grid container spacing={6}>
          {categories.map((category, i) => (
            <Grid item lg={3} md={4} xs={6} key={category.categoryId}>
              <AnimatedContainer index={i}>
                <CategoryItem
                  {...category}
                  linkToUrl={`/category/${category.name}`}
                />
              </AnimatedContainer>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Home;
