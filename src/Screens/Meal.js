import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchByMealId } from "../utils/ApiHelper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IngredientsList from "Components/IngredientsList/IngredientsList";
import Video from "Components/Video/Video";
import Flag from "react-world-flags";
import { countryMappings as COUNTRY_MAPPINGS } from "../Constants";

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

  a {
    text-decoration: none;
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

const FlagContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 32px;
`;

const StyledFlag = styled(Flag)`
  margin-left: 20px;
  max-width: 120px;
`;

const Tag = styled.span`
  color: #f5365c;
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
            <strong>{meal && meal.name}</strong>
          </Typography>
        </Container>
      </HeaderContainer>
      <StyledContainer>
        <Grid container spacing={6}>
          {meal && (
            <>
              <MenuHeaderContainer container spacing={0}>
                <Grid item md={8} xs={12}>
                  <VideoContainer>
                    <Video {...meal}></Video>
                  </VideoContainer>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <MetadataContainer>
                    <FlagContainer>
                      <Typography variant="h5" gutterBottom>
                        {meal.country}
                      </Typography>
                      <StyledFlag
                        code={COUNTRY_MAPPINGS[meal.country]}
                        fallback={<span>{meal.country}</span>}
                      />
                    </FlagContainer>
                    <Typography variant="h3" gutterBottom>
                      <strong>{meal.name}</strong>
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      Category: {meal.category}
                    </Typography>
                    {meal.tags && (
                      <Typography variant="h5" gutterBottom>
                        Tags:&nbsp;
                        {meal.tags.map((tag, i) => (
                          <Tag>
                            {tag}
                            {i < meal.tags.length - 1 && ", "}
                          </Tag>
                        ))}
                      </Typography>
                    )}
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
