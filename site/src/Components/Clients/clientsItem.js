import React from 'react';
export default class ClientsItem extends React.Component {
  render() {
    return(
      <div>
        <img src={`/Photo/${this.props.img}`} />
      </div>
    );
  }
}
