const Reducer = (state, action) => {
  switch (action.type) {
    case "addToFavorites":
      return {
        ...state,
        favorites: action.favorites
      };
    case "removeFromFavorites":
      return {
        ...state,
        favorites: action.favorites
      };
    default:
      return state;
  }
};

export default Reducer;
