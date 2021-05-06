import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './screens/login/Login';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/login' component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
