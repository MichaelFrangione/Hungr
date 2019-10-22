import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import Typography from "@material-ui/core/Typography";

const HeaderContainer = styled.div`
  padding: 16px 0;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-left: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }
`;
const StyledLocalPizzaIcon = styled(LocalPizzaIcon)`
  font-size: 4em !important;
  color: #fb6340;
`;

const AppHeader = () => {
  return (
    <HeaderContainer>
      <Container>
        <Link to="/">
          <NavContainer>
            <StyledLocalPizzaIcon></StyledLocalPizzaIcon>
            <Typography variant="h4" gutterBottom>
              HUNGR
            </Typography>
          </NavContainer>
        </Link>
      </Container>
    </HeaderContainer>
  );
};

export default AppHeader;
