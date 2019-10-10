import React from 'react';

export default class LinksItem extends React.Component {
  render() {
    return (
      <div>
        <a href="#">{this.props.name}</a>
      </div>
    );
  }
}
