import { actions } from "../Constants";

const Favorites = (state, action) => {
  switch (action.type) {
    case actions.setFavorites:
      return action.favorites;
    default:
      return state;
  }
};

export default Favorites;
