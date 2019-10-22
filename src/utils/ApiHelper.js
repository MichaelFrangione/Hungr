import axios from "axios";
import { parseCategories, parseCategory, parseMeals } from "./ApiParser";

export const fetchCategories = async () => {
  const categories = await axios(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return parseCategories(categories.data);
};

export const fetchByCategory = async categoryName => {
  const category = await axios(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  return parseCategory(category.data);
};

export const fetchByMealId = async mealId => {
  try {
    const meal = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );

    return parseMeals(meal.data);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchRandomMeal = async count => {
  const promises = Array.from({ length: count }).map(async () => {
    const meals = await axios(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    return meals.data.meals[0];
  });

  const meals = await Promise.all(promises);
  return parseMeals({ meals });
};

export const fetchFavorites = async mealIds => {
  const promises = mealIds.map(async mealId => {
    const favorites = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    return favorites.data.meals[0];
  });

  const meals = await Promise.all(promises);
  return parseMeals({ meals });
};
