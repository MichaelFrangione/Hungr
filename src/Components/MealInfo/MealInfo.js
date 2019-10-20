import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Video from "Components/Video/Video";
import Flag from "Components/Flag";
import { Link } from "react-router-dom";

const MenuHeaderContainer = styled(Grid)`
  background: #172b4d;
  height: 600px;
  display: flex !important;

  a {
    text-decoration: none;
    color: white;

    :hover {
      text-decoration: underline;
    }
  }
`;

const VideoContainer = styled.div`
  width: 100%;
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

const MealInfo = ({ meal, isCarousel, ...others }) => {
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
            {isCarousel ? (
              <Link to={`/meal/${meal.mealId}`}>
                <strong>{meal.name}</strong>
              </Link>
            ) : (
              <strong>{meal.name}</strong>
            )}
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
        </MetadataContainer>
      </Grid>
    </MenuHeaderContainer>
  );
};

export default MealInfo;
