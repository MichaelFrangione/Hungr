import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Category from 'Screens/Category';
import Meal from 'Screens/Meal';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/category/:id" render={(props) => <Category categoryName={props.match.params.id} />} />
				<Route path="/meal/:id" render={(props) => <Meal mealId={props.match.params.id} />} />
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
