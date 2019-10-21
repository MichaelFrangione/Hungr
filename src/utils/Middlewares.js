/**
 * @param  {} mealId id of the meal requested to be added
 * @param  {} state current state from useReducer()
 * @param  {} dispatch dispatcher from useReducer()
 */
export const addFavorite = (mealId, state, dispatch) => {
  if (state.favorites.includes(mealId)) return;

  const favorites = [...state.favorites, mealId];

  localStorage.setItem("favorites", JSON.stringify(favorites));

  dispatch({
    type: "addToFavorites",
    favorites
  });
};

/**
 * @param  {} mealId id of the meal requested to be removed
 * @param  {} state current state from useReducer() hook
 * @param  {} dispatch dispatcher from useReducer() hook
 */
export const removeFavorite = (mealId, state, dispatch) => {
  const favorites = state.favorites.filter(el => el !== mealId);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  dispatch({
    type: "removeFromFavorites",
    favorites
  });
};
