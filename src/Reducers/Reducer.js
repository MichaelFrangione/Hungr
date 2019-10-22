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
    case "error":
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default Reducer;
