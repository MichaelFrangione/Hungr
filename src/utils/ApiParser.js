export const parseCategories = (resp) => {
	return resp.categories.map((cat) => {
		return {
			categoryId: cat.idCategory,
			name: cat.strCategory,
			thumbnail: cat.strCategoryThumb,
			description: cat.strCategoryDescription
		};
	});
};

export const parseCategory = (resp) => {
	return resp.meals.map((cat) => {
		return {
			name: cat.strMeal,
			thumbnail: cat.strMealThumb,
			mealId: cat.idMeal
		};
	});
};
