import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Video from "Components/Video/Video";
import Flag from "Components/Flag";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useStateValue } from "../../Providers/StateProvider";

const MenuHeaderContainer = styled(Grid)`
  background: #172b4d;
  height: 600px;
  display: flex !important;

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

const StyledButton = styled(Button)`
  position: absolute !important;
  bottom: 32px;
  right: 32px;
  text-transform: none !important;
`;

const StyledFab = styled(Fab)`
  position: absolute !important;
  bottom: 32px;
  right: 32px;
  text-transform: none !important;
`;

const MealInfo = ({ meal, isCarousel, ...others }) => {
  const [{ favorites }, dispatch] = useStateValue();

  const isFavorited = favorites && favorites.includes(meal.mealId);
  return (
    <MenuHeaderContainer container spacing={0} {...others}>
      <Grid item md={8} xs={12}>
        <VideoContainer>
          <Video hideVideo={isCarousel} {...meal}></Video>
        </VideoContainer>
      </Grid>
      <Grid item sm={4} xs={12}>
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
          ) : !isFavorited ? (
            <StyledFab
              variant="extended"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: "addToFavorites",
                  id: meal.mealId
                })
              }
            >
              <FavoriteBorderIcon />
              <Typography variant="h5">&nbsp;Add to Favorites</Typography>
            </StyledFab>
          ) : (
            <StyledFab
              variant="extended"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: "removeFromFavorites",
                  id: meal.mealId
                })
              }
            >
              <FavoriteIcon />
              <Typography variant="h5">&nbsp;Remove from Favorites</Typography>
            </StyledFab>
          )}
        </MetadataContainer>
      </Grid>
    </MenuHeaderContainer>
  );
};

export default MealInfo;
