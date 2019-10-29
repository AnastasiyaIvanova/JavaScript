import React from 'react';
import './style.css';
import Filter from '../../Components/Filter/Filter.js';
import Search from '../../Components/Search/Search.js';
import Cards from '../../Components/Cards/Cards.js';


export default class Restaurants extends React.Component{
  render() {
    return (
      <div className="rest">
				<h1>Рестораны</h1>
        <Filter />
        <Search />
        <Cards />
			</div>
    );
  }
}
