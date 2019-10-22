import React from "react";
import styled from "styled-components";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import Typography from "@material-ui/core/Typography";

const AppHeader = styled.div`
  padding: 64px;
  text-align: center;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledLocalPizzaIcon = styled(LocalPizzaIcon)`
  margin-bottom: 16px;
  font-size: 7em !important;
  color: #fb6340;
`;
const Header = () => {
  return (
    <AppHeader>
      <StyledLocalPizzaIcon />

      <Typography variant="h3" gutterBottom>
        WELCOME TO <span>HUNGR</span>
      </Typography>
      <Typography variant="h4">
        Your mealDB powered solution to an empty stomach
      </Typography>
    </AppHeader>
  );
};

export default Header;
