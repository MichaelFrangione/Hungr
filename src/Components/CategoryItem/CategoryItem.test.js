import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryItem from './CategoryItem';

describe('CategoryItem', () => {
	test('It renders with the category text', () => {
		const props = { name: 'test' };
		const { getByText } = render(<CategoryItem category={props} />);

		expect(getByText(/test/)).toBeInTheDocument();
	});
});
