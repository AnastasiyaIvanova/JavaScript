import React from 'react';
export default class ExamplesItem extends React.Component {
  render() {
    return(
      <div>
        <img src={`/Photo/${this.props.img}`} alt = ""/>
        <div>
          <i className="pe-7s-look"></i>
        </div>
      </div>
    );
  }
}
