import axios from 'axios';
import { parseCategories, parseCategory } from './ApiParser';

export const fetchCategories = async () => {
	try {
		const data = await axios('https://www.themealdb.com/api/json/v1/1/categories.php');
		return parseCategories(data.data);
	} catch (err) {
		console.error(err.message);
	}
};

export const fetchByCategory = async (categoryName) => {
	try {
		const data = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
		return parseCategory(data.data);
	} catch (err) {
		console.error(err.message);
	}
};
