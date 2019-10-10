import React from 'react';
export default class ServicesItems extends React.Component {
  render() {
    return(
      <div>
        <i className={`pe-7s-${this.props.picture}`}></i>
        <h3>{this.props.name}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
