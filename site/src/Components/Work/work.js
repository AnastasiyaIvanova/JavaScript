import React from 'react';
import WorkItem from './workItem.js';

export default class Work extends React.Component {
  render() {
    return(
      <div class="about_work">
        <div class="work_block">
        {this.props.info.map((item, index) => (
          <WorkItem id={index} name={item.name} numb={item.numb} picture={item.pic} />
        ))}
        </div>
      </div>
    );
  }
}
