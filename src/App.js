import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uniq as _uniq } from "lodash";
import Home from "./Screens/Home";
import Category from "Screens/Category";
import Meal from "Screens/Meal";
import { StateProvider } from "Providers/StateProvider";
import "./App.css";
import LocalStorageProvider from "Providers/LocalStorageProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f5f7;
  }
`;

function App() {
  const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "addToFavorites":
        if (state.favorites && !state.favorites.includes(action.id)) {
          return {
            ...state,
            favorites: [...state.favorites, action.id]
          };
        }
        return state;
      case "removeFromFavorites":
        return {
          ...state,
          favorites: state.favorites.filter(el => el !== action.id)
        };

      default:
        return state;
    }
  };

  return (
    <>
      <GlobalStyle />
      <StateProvider initialState={initialState} reducer={reducer}>
        <LocalStorageProvider>
          <Router>
            <Switch>
              <Route
                path="/category/:id"
                render={props => (
                  <Category categoryName={props.match.params.id} />
                )}
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
        </LocalStorageProvider>
      </StateProvider>
    </>
  );
}

export default App;
