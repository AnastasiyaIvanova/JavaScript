import React from 'react';
import WorkItem from './workItem.js';

export default class Work extends React.Component {
  render() {
    return(
      <div className="about_work">
        <div className="work_block">
        {this.props.info.map((item, index) => (
          <WorkItem key={index} name={item.name} numb={item.numb} picture={item.pic} />
        ))}
        </div>
      </div>
    );
  }
}
