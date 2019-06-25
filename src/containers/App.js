import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../Robots';
import Scroll from '../components/Scroll'

class App extends Component{
	constructor(){
		super();
		this.state={
		robots:robots,
		searchField:'',
	}
	}

	onSearchChange = (event)=>{
		this.setState({ searchField: event.target.value }) 
		

		}

	render(){
		const filterRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

	return( 
		<div className="tc">
		<h1>RobotFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots={filterRobots}/>
		</Scroll>
		</div>
		);
}
}

export default App;