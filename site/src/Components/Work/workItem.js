import React from 'react';

export default class WorkItem extends React.Component {
  render() {
    return(
      <span className={`pe-7s-${this.props.picture}`}>
      <div class="work_numbers">
          <div class="numb">{this.props.numb}</div>
          <div class="work_name">{this.props.name}</div>
        </div>
      </span>
    )
  }
}
