import React from 'react';
import ServicesItems from './servicesItems.js';

export default class Services extends React.Component {
  render() {
    return(
      <div className="main_services">
				<div className="services">
        {this.props.serv.map((item, index) => (
          <ServicesItems key={index} picture={item.pic} text={item.text} name={item.name} />
        ))}
				</div>
			</div>
    );
  }
}
