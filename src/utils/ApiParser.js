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

export const parseMeals = (resp) => {
	return resp.meals.map((meal) => {
		const rest = Object.keys(meal).reduce((acc, curr) => {
			if (/str(Ingredient|Measure)/.test(curr)) return acc;
			return {
				[curr]: meal[curr],
				...acc
			};
		}, {});
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
			tags: meal.strTags, // TODO: convert to array of tags
			youtube: meal.strYoutube
		};
	});
};
