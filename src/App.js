import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import Trending from './screens/trending/Trending';
import Write from './screens/write/Write';
import { connect } from 'react-redux';
import Blog from './screens/blog/Blog';

function App(props) {
	if (props.token) {
		console.log(props.token);
		axios.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;
	}
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					{/* <Route
						exact
						path='/write'
						render={(props) =>
							props.token ? (
								<Write />
							) : (
								<Redirect
									to={{ pathname: '/login', state: { from: props.location } }}
								/>
							)
						}
					/> */}
					<Route exact path='/write' component={Write} />
					<Route exact path='/trending' component={Trending} />
					<Route exact path='/' component={Home} />
					<Route exact path='/post/:id' component={Blog} />
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
});

export default connect(mapStateToProps)(App);
