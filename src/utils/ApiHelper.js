import axios from "axios";
import { parseCategories, parseCategory, parseMeals } from "./ApiParser";

export const fetchCategories = async () => {
  try {
    const data = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return parseCategories(data.data);
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchByCategory = async categoryName => {
  try {
    const data = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    return parseCategory(data.data);
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchByTag = async categoryName => {
  try {
    const data = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    return parseCategory(data.data);
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchByMealId = async mealId => {
  try {
    const data = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );

    return parseMeals(data.data);
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchRandomMeal = async count => {
  try {
    const promises = Array.from({ length: count }).map(async () => {
      const data = await axios(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      return data.data.meals[0];
    });

    const meals = await Promise.all(promises);
    return parseMeals({ meals });
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchFavorites = async mealIds => {
  try {
    const promises = mealIds.map(async mealId => {
      const data = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      return data.data.meals[0];
    });

    const meals = await Promise.all(promises);
    return parseMeals({ meals });
  } catch (err) {
    console.error(err.message);
  }
};
