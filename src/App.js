import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './Robots'

const App = ({robots}) =>{
	return( 
		<div className="tc">
		<h1>ROBOT FRIENDS</h1>
		<SearchBox/>
		<CardList robots={robots}/>
		</div>
		);
}

export default App;