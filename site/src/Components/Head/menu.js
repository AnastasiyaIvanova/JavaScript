import React from 'react';
export default class Menu extends React.Component {
  render() {
    return (
      <a href="#">{this.props.name}</a>
    )
  }
}
