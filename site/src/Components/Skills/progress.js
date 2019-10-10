import React from 'react';
export default class Progress extends React.Component {
  render() {
    const width = {
      width : `${this.props.percent}%`
    }
    return(
      <>
        <li>{this.props.bar} {this.props.percent}%</li>
        <div className="bar">
          <div style={width}></div>
        </div>
      </>
    )
  }
}
