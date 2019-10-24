import favortiesReducer from "./favorites";
import apiReducer from "./api";

const mainReducer = ({ favorites, api }, action) => ({
  favorites: favortiesReducer(favorites, action),
  api: apiReducer(api, action)
});

export default mainReducer;
