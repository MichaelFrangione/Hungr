import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider } from "Providers/StateProvider";
import reducer from "./Reducers";
import "./App.css";
import ErrorBoundary from "Components/ErrorBoundry/ErrorBoundry";
import theme from "./Themes/Theme";
import HomeContainer from "Containers/HomeContainer";
import CategoryContainer from "Containers/CategoryContainer";
import MealContainer from "Containers/MealContainer";

const GlobalStyle = createGlobalStyle`
  body {
  background: ${({ theme }) => theme.background};
  }
  a {
    text-decoration: none;
  }
`;

function App() {
  const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    api: {}
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Router>
            <Switch>
              <Route
                path="/category/:id"
                render={props => {
                  return (
                    <CategoryContainer
                      categoryName={props.match.params.id}
                      description={props.location.state.description}
                    />
                  );
                }}
              />
              <Route
                path="/meal/:id"
                render={props => (
                  <MealContainer mealId={props.match.params.id} />
                )}
              />
              <Route path="/">
                <HomeContainer />
              </Route>
            </Switch>
          </Router>
        </StateProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
