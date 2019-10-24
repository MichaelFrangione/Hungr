import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchRandomMeal,
  fetchFavorites
} from "../utils/ApiHelper";
import { useStateValue } from "../Providers/StateProvider";
import Home from "../Screens/Home";
import ErrorModal from "Components/ErrorModal/ErrorModal";
import { saveCategoriesResponse } from "../utils/Middlewares";

const HomeContainer = () => {
  const [{ favorites, api }, dispatch] = useStateValue();
  const [categories, setCategories] = useState(api.categories);
  const [randomRecipes, setRandomRecipes] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [favoritesList, setfavoritesList] = useState(null);

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        saveCategoriesResponse(data, api, dispatch);
      } catch (err) {
        setHasError(true);
      }
    };

    const fetchRandom = async () => {
      try {
        const data = await fetchRandomMeal(3);
        setRandomRecipes(data);
      } catch (err) {
        setHasError(true);
      }
    };

    fetchRandom();
    if (!api.categories) {
      fetchCategoryList();
    }
  }, [api, dispatch]);

  useEffect(() => {
    const fetchFavoritesList = async () => {
      try {
        const data = await fetchFavorites(favorites);
        setfavoritesList(data);
      } catch (err) {
        setHasError(true);
      }
    };
    fetchFavoritesList();
  }, [favorites]);

  return (
    <>
      {hasError && <ErrorModal />}

      <Home
        favorites={favoritesList}
        categories={categories}
        randomRecipes={randomRecipes}
      />
    </>
  );
};

export default HomeContainer;
