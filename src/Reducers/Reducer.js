import { actions } from "../Constants";

const Reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorites:
      return {
        ...state,
        favorites: action.favorites
      };
    default:
      return state;
  }
};

export default Reducer;
