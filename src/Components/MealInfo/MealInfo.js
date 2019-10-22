import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Video from "Components/Video/Video";
import Flag from "Components/Flag";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { useStateValue } from "../../Providers/StateProvider";
import { addFavorite, removeFavorite } from "../../utils/Middlewares";
import { MealItemType } from "Components/Types";
import AddRemoveFromFavorites from "Components/AddRemoveFromFavorites";

const BREAKPOINT = 860;

const MenuHeaderContainer = styled(Grid)`
  background: #172b4d;
  display: flex !important;
  height: 600px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
`;

const MetadataContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  color: #fff;
  text-align: left;
  padding: 32px;
  position: relative;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 16px;
    h3 {
      font-size: 1.8em;
    }

    h4 {
      font-size: 1.4em;
    }

    h5 {
      font-size: 1.2em;
    }
  }
`;

const FlagContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: ${BREAKPOINT}px) {
    h5 {
      display: none;
    }
  }
`;

const StyledFlag = styled(Flag)`
  margin-left: 20px;
  max-width: 120px;

  @media (max-width: ${BREAKPOINT}px) {
    max-width: 80px;
  }
`;

const Tag = styled.span`
  color: #f5365c;
`;

const StyledButton = styled(Button)`
  position: absolute !important;
  bottom: 32px;
  right: 32px;
  text-transform: none !important;

  @media (max-width: ${BREAKPOINT}px) {
    bottom: 16px;
    right: 16px;
    h5 {
      font-size: 0.8em;
    }
  }
`;

const StyledAddRemoveFromFavorites = styled(AddRemoveFromFavorites)`
  position: absolute !important;
  bottom: 32px;
  right: 32px;
`;

const MealInfo = ({ meal, isCarousel, ...others }) => {
  const [state, dispatch] = useStateValue();

  const isFavorited = state.favorites && state.favorites.includes(meal.mealId);
  return (
    <MenuHeaderContainer container spacing={0} {...others}>
      <Grid item xs={8}>
        <VideoContainer>
          <Video hideVideo={isCarousel} {...meal}></Video>
        </VideoContainer>
      </Grid>
      <Grid item xs={4}>
        <MetadataContainer>
          <FlagContainer>
            <Typography variant="h5" gutterBottom>
              {meal.country}
            </Typography>
            <StyledFlag country={meal.country} />
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
                <Tag key={i}>
                  {tag}
                  {i < meal.tags.length - 1 && ", "}
                </Tag>
              ))}
            </Typography>
          )}
          {isCarousel ? (
            <StyledButton variant="contained" color="secondary">
              <Link to={`/meal/${meal.mealId}`}>
                <Typography variant="h4">View Recipe</Typography>
              </Link>
            </StyledButton>
          ) : (
            <StyledAddRemoveFromFavorites
              isAdd={!isFavorited}
              breakpoint={BREAKPOINT}
              onClickHandler={() =>
                isFavorited
                  ? removeFavorite(meal.mealId, state, dispatch)
                  : addFavorite(meal.mealId, state, dispatch)
              }
            />
          )}
        </MetadataContainer>
      </Grid>
    </MenuHeaderContainer>
  );
};

MealInfo.propTypes = {
  /* Used to determing if it should show video and view recipe / favorites */
  isCarousel: PropTypes.bool,
  meal: MealItemType
};

export default MealInfo;
