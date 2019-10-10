import React from 'react';
import Progress from './progress.js';

export default class Skills extends React.Component {
  render() {
    return(
      <div className="about_skills">
        <div className="about_left">
          <h1>Professional Skills</h1>
          <ul>
            {this.props.info.map((item, index) => (
              <Progress id={index} bar={item.name} percent={item.percent} />
            ))}
          </ul>
        </div>
        <div className="about_right"></div>
      </div>
    );
  }
}
