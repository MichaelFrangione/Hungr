import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Category from "Screens/Category";
import Meal from "Screens/Meal";
import { StateProvider } from "Providers/StateProvider";
import reducer from "./Reducers";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f5f7;
  }
`;

function App() {
  const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  };

  return (
    <>
      <GlobalStyle />
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
    </>
  );
}

export default App;
