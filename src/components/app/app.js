import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Header from '../../components/header';

import CatalogPage from '../../pages/catalogPage';
import CardPage from '../../pages/cardPage';
import CartPage from '../../pages/cardPage';
import Error404 from '../../pages/error404';

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Router>
				<Switch>
					<Route path='/' exact component={CatalogPage} />
					<Route path='/cart' exact component={CartPage} />
					<Route path='/catalog/:category/:id' exact component={CardPage} />
					<Route component={Error404} />
				</Switch>
			</Router>
		</React.Fragment>
	);
};

export default App;
