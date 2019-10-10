import React from 'react';
import ClientsItem from './clientsItem.js';

export default class Clients extends React.Component {
  render() {
    return (
      <div class="main_clients">
      {this.props.img.map((item, index) => (
        <ClientsItem id={index} img={item.name} />
      ))}
      </div>
    );
  }
}
