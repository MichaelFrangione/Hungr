import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider } from "Providers/StateProvider";
import reducer from "./Reducers";
import "./App.css";
import ErrorBoundary from "Components/ErrorBoundry/ErrorBoundry";
import theme from "./Themes/Theme";
import HomeProvider from "Providers/HomeProvider";
import CategoryProvider from "Providers/CategoryProvider";
import MealProvider from "Providers/MealProvider";

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
                    <CategoryProvider
                      categoryName={props.match.params.id}
                      description={props.location.state.description}
                    />
                  );
                }}
              />
              <Route
                path="/meal/:id"
                render={props => (
                  <MealProvider mealId={props.match.params.id} />
                )}
              />
              <Route path="/">
                <HomeProvider />
              </Route>
            </Switch>
          </Router>
        </StateProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
