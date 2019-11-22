import { actions } from "../Constants";

const Api = (state, action) => {
  switch (action.type) {
    case actions.setCategories:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
};

export default Api;
