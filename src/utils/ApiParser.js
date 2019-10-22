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
  if (!resp.meals) return null;
  return resp.meals.map(cat => {
    return {
      name: cat.strMeal,
      thumbnail: cat.strMealThumb,
      mealId: cat.idMeal
    };
  });
};

export const parseMeals = resp => {
  if (!resp.meals) return null;
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
      videoId: getVideoId(meal.strYoutube)
    };
  });
};

const parseTags = tags => {
  return tags && tags.split(",");
};

/**
 * Takes a youtube url and returns the video id
 * @param {string} url url of the video to extract the Id from
 * @returns {string} videoId of the video passed in.
 */
export const getVideoId = url => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
};
