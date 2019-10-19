import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchByMealId } from '../utils/ApiHelper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const StyledContainer = styled(Container)`
    align-content: center;
    justify-content: center;
`;

const HeaderContainer = styled.div`
    background: #2dce89;
    padding: 50px 0 10px 0;
    margin-bottom: 60px;
	color: white;
	
	a {
		text-decoration: none;
		color: white;
	}
`;

const Meal = ({mealId}) => {
	const [ meal, setMeal ] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchByMealId(mealId);
			setMeal(data[0]);
		};
		fetchData();
	}, [mealId]);

	console.log(meal);
	return (
        <>
			<HeaderContainer>
				<Container>
					<Link to={`/category/${meal && meal.category}`}>
						<Typography variant="h6" gutterBottom>
							Back
						</Typography>
					</Link>
					<Typography variant="h4" gutterBottom>
						<strong>{mealId}</strong>
					</Typography>
				</Container>
			</HeaderContainer>
			<StyledContainer>
				<Grid container spacing={6}>
					{meal && (
						<>
							<img src={meal.thumbnail} alt={meal.name}/>
							<ul>
								{meal.ingredients.map((ing, i) => (
									<li key={i}>{ing.ingredient} | {ing.measurement}</li>
								))}
							</ul>
							<p>{meal.instructions}</p>
						</>
					)}
				</Grid>
			</StyledContainer>
        </>
	);
};

export default Meal;
