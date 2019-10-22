import axios from "axios";
import { parseCategories, parseCategory, parseMeals } from "./ApiParser";

export const fetchCategories = async () => {
  try {
    const categories = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return parseCategories(categories.data);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchByCategory = async categoryName => {
  try {
    const category = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    return parseCategory(category.data);
  } catch (err) {
    throw new Error(err.message);
  }
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
  try {
    const promises = Array.from({ length: count }).map(async () => {
      const meals = await axios(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      return meals.data.meals[0];
    });

    const meals = await Promise.all(promises);
    return parseMeals({ meals });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchFavorites = async mealIds => {
  try {
    const promises = mealIds.map(async mealId => {
      const favorites = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      return favorites.data.meals[0];
    });

    const meals = await Promise.all(promises);
    return parseMeals({ meals });
  } catch (err) {
    throw new Error(err.message);
  }
};
