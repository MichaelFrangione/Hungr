import { shape, string, array } from "prop-types";

export const MealItemType = shape({
  ingredients: array,
  mealId: string.isRequired,
  name: string,
  category: string,
  country: string,
  instructions: string,
  thumbnail: string,
  tags: array,
  youtube: string
});

export const CategoryItemType = shape({
  categoryId: string,
  name: string,
  thumbnail: string,
  description: string
});

export const IngredientsType = shape({
  ingredient: string,
  measurement: string
});
