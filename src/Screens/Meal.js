import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchByMealId } from "../utils/ApiHelper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IngredientsList from "Components/IngredientsList/IngredientsList";
import Video from "Components/Video/Video";

const VideoContainer = styled.div`
  width: 100%;
`;

const StyledContainer = styled(Container)`
  align-content: center;
  justify-content: center;
  margin-bottom: 50px;

  p {
    font-size: 1.5rem;
  }
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

const MenuHeaderContainer = styled(Grid)`
  background: #172b4d;
  height: 600px;
  margin: 32px 0;
`;

const MetadataContainer = styled.div`
  color: #fff;
  text-align: left;
  padding: 32px;
`;

const Meal = ({ mealId }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchByMealId(mealId);
      setMeal(data[0]);
    };
    fetchData();
  }, [mealId]);

  console.log(meal);
  return (
    <>
      <HeaderContainer>
        <Container>
          <Link to={`/category/${meal && meal.category}`}>
            <Typography variant="h6" gutterBottom>
              Back
            </Typography>
          </Link>
          <Typography variant="h4" gutterBottom>
            <strong>{mealId}</strong>
          </Typography>
        </Container>
      </HeaderContainer>
      <StyledContainer>
        <Grid container spacing={6}>
          {meal && (
            <>
              <MenuHeaderContainer container spacing={0}>
                <Grid item sm={8} xs={12}>
                  <VideoContainer>
                    <Video {...meal}></Video>
                  </VideoContainer>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <MetadataContainer>
                    <Typography variant="h4" gutterBottom>
                      Origin: {meal.country}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      Category: {meal.category}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      Tags:{" "}
                      {meal.tags.map(tag => (
                        <span key={tag}>{tag}&nbsp;</span>
                      ))}
                    </Typography>
                  </MetadataContainer>
                </Grid>
              </MenuHeaderContainer>

              <Grid container spacing={0}>
                <Grid item sm={4} xs={12}>
                  <IngredientsList ingredients={meal.ingredients} />
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Typography variant="h4" gutterBottom>
                    Directions
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {meal.instructions}
                  </Typography>
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
