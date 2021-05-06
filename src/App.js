import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
