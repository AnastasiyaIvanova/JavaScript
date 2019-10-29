import React from 'react';
import './style.css';

export default class CardItem extends React.Component{
  render() {
    const divStyle={gridColumn: this.props.id};
    return (
        <div className="card" style={divStyle}>
          <img className="pic" src={`/Pictures/${this.props.pic}`} alt="" />
          <div className="rectangle">
            <img className="logo" src={`/Pictures/${this.props.logo}`} alt="" />
          </div>
          <h2>{this.props.name}</h2>
          <p className="food">{this.props.food}</p>
          <div className="info">
            <span class="star"><i class="fa fa-star"></i></span>
            <p className="rating">{this.props.rating}</p>
            <img className="clock" src="/Pictures/clock.png" alt="" />
            <p className="time">{this.props.time}</p>
            <img className="car" src="/Pictures/car2.png" alt="" />
            <p className="cost">{`от ${this.props.cost}₽`}</p>
          </div>
        </div>
    );
  }
}
