import React from 'react';

import CategoryItem from './CategoryItem';

export default {
	title: 'CategoryItem'
};

const props = { name: 'test', thumbnail: 'https://www.themealdb.com/images/category/beef.png' };

export const categoryItem = () => <CategoryItem category={props} />;
