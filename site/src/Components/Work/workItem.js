import React from 'react';

export default class WorkItem extends React.Component {
  render() {
    return(
      <span className={`pe-7s-${this.props.picture}`}>
      <div className="work_numbers">
          <div className="numb">{this.props.numb}</div>
          <div className="work_name">{this.props.name}</div>
        </div>
      </span>
    )
  }
}
