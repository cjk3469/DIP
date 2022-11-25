import React, { Component } from 'react';
import './App.css';
import Router from './Router/Router';
import axios from 'axios';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
		  data : [],
		};
	}

	componentDidMount() {
		this._getHello();
	}

	_getHello = async() => {
		const res = await axios.get('/api/products');
		console.log(res);
		const test = res.data;
		this.setState({ data : test })
		console.log(this.state.data);
	}

	render() {
		return (
			<div>
				 <h3> {this.state.data.username} - connected to server</h3>
      			<Router/>
			</div>
		);
	}
};

export default App;