import React from 'react';
import ExamplesItem from './examplesItem.js';

export default class Examples extends React.Component {
  render() {
    return(
      <div class="main_work">
				{this.props.img.map((item, index) => (
          <ExamplesItem id={index} img={item.name} />
        ))}
				<a href="#">LOAD MORE WORK</a>
			</div>
    );
  }
}
