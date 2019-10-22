import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.02);
  }

  a {
    text-decoration: none;
  }

  h4 {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.gridItemTextColor};
    pointer-events: none;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const CategoryItem = ({ name, thumbnail, linkToUrl, description }) => {
  return (
    <Container>
      <Link to={{ pathname: linkToUrl, state: { description } }}>
        <img src={thumbnail} alt={name} />
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
      </Link>
    </Container>
  );
};

CategoryItem.propTypes = {
  linkToUrl: PropTypes.string
};

export default CategoryItem;
