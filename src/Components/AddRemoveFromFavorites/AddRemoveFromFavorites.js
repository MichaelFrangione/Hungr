import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Typography from "@material-ui/core/Typography";

const StyledFab = styled(Fab)`
  text-transform: none !important;

  @media (max-width: ${({ breakpoint }) => breakpoint}px) {
    h5 {
      display: none;
    }
  }
`;

const AddRemoveFromFavorites = ({
  isAdd,
  onClickHandler,
  breakpoint,
  ...others
}) => {
  return (
    <StyledFab
      variant="extended"
      color="secondary"
      onClick={() => onClickHandler()}
      breakpoint={breakpoint}
      {...others}
    >
      {isAdd ? (
        <>
          <FavoriteBorderIcon />
          <Typography variant="h5">&nbsp;Add to Favorites</Typography>
        </>
      ) : (
        <>
          <FavoriteIcon />
          <Typography variant="h5">&nbsp;Remove from Favorites</Typography>
        </>
      )}
    </StyledFab>
  );
};

export default AddRemoveFromFavorites;
