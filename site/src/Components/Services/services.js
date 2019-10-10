import React from 'react';
import ServicesItems from './servicesItems.js';

export default class Services extends React.Component {
  render() {
    return(
      <div class="main_services">
				<div class="services">
        {this.props.serv.map((item, index) => (
          <ServicesItems id={index} picture={item.pic} text={item.text} name={item.name} />
        ))}
				</div>
			</div>
    );
  }
}
