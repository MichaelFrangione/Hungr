import React from "react";
import PropTypes from "prop-types";
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

AddRemoveFromFavorites.propTypes = {
  /* Determines if it will show an Add or remove UI*/
  isAdd: PropTypes.bool,
  /* Call back to run on button click */
  onClickHandler: PropTypes.func,
  /* screen size to hide the text */
  breakpoint: PropTypes.number
};

export default AddRemoveFromFavorites;
