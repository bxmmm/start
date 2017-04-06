import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Landing from './components/Landing';
import Header from './components/Header';
import './app.css';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header/>

				{/* Declarational Routing with reatct-router v4 */}
					<Route exact path='/' component={Landing}/>
					<Route path='/about' component={About}/>
				</div>
			</Router>
		);
	}
}
