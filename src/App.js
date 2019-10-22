import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Category from "Screens/Category";
import Meal from "Screens/Meal";
import { StateProvider } from "Providers/StateProvider";
import reducer from "./Reducers";
import "./App.css";
import ErrorBoundary from "Components/ErrorBoundry/ErrorBoundry";
import theme from "./Themes/Theme";

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
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
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
                    <Category
                      categoryName={props.match.params.id}
                      description={props.location.state.description}
                    />
                  );
                }}
              />
              <Route
                path="/meal/:id"
                render={props => <Meal mealId={props.match.params.id} />}
              />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </StateProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
