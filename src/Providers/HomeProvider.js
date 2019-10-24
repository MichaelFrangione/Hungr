import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchRandomMeal,
  fetchFavorites
} from "../utils/ApiHelper";
import { useStateValue } from "./StateProvider";
import Home from "../Screens/Home";
import ErrorModal from "Components/ErrorModal/ErrorModal";

const HomeProvider = () => {
  const [categories, setCategories] = useState(null);
  const [randomRecipes, setRandomRecipes] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [favoritesList, setfavoritesList] = useState(null);
  const [{ favorites }] = useStateValue();

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
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
    fetchCategoryList();
  }, []);

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

export default HomeProvider;
