import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Header from '../../components/header';

import CatalogPage from '../../pages/catalogPage';
import CardPage from '../../pages/cardPage';
import Error404 from '../../pages/error404';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' exact component={CatalogPage} />
				<Route path='/catalog/:category/:name' exact component={CardPage} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
