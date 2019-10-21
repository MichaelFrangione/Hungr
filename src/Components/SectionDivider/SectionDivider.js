import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const HeaderContainer = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: flex-end;
  background: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : "#5e72e4"};
  padding-bottom: 10px;
  margin-bottom: 32px;
  color: white;
`;

const SectionDivider = ({ heading, subHeading, backgroundColor }) => (
  <HeaderContainer backgroundColor={backgroundColor}>
    <Container>
      <Typography variant="h4" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {subHeading}
      </Typography>
    </Container>
  </HeaderContainer>
);

SectionDivider.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default SectionDivider;
