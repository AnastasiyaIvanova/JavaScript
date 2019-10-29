import React from 'react';
import './style.css';
import CardItem from '../../Components/CardItem/CardItem.js';
import data from './data.json';

export default class Card extends React.Component{
  render() {
    return (
      <div className="cards">
        {data.card.map((item, index) => (
          <CardItem
              key={index}
              id={item.id}
              pic={item.picture}
              logo={item.logo}
              name={item.name}
              food={item.food}
              rating={item.rating}
              time={item.time}
              cost={item.cost} />
        ))}
      </div>
    );
  }
}
