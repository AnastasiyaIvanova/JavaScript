import React from 'react';
import ExamplesItem from './examplesItem.js';

export default class Examples extends React.Component {
  render() {
    return(
      <div className="main_work">
				{this.props.img.map((item, index) => (
          <ExamplesItem key={index} img={item.name} />
        ))}
				<a href="#">LOAD MORE WORK</a>
			</div>
    );
  }
}
