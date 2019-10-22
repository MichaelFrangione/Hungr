export const parseCategories = resp => {
  if (!resp.categories) return null;
  return resp.categories.map(cat => {
    return {
      categoryId: cat.idCategory,
      name: cat.strCategory,
      thumbnail: cat.strCategoryThumb,
      description: cat.strCategoryDescription
    };
  });
};

export const parseCategory = resp => {
  return resp.meals.map(cat => {
    return {
      name: cat.strMeal,
      thumbnail: cat.strMealThumb,
      mealId: cat.idMeal
    };
  });
};

export const parseMeals = resp => {
  return resp.meals.map(meal => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (!meal[`strIngredient${i}`]) continue;
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measurement: meal[`strMeasure${i}`]
      });
    }

    return {
      ingredients,
      mealId: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      country: meal.strArea,
      instructions: meal.strInstructions,
      thumbnail: meal.strMealThumb,
      tags: parseTags(meal.strTags),
      youtube: meal.strYoutube
    };
  });
};

const parseTags = tags => {
  return tags && tags.split(",");
};
