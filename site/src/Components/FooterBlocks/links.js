import React from 'react';
import LinksItem from './linksItem.js';

export default class Links extends React.Component {
  render() {
    return (
      <>
        <div className="block_links_left">
          {this.props.left.map((item, index) => (
            <LinksItem key={index} name={item.name}/>
          ))}
        </div>
        <div className="block_links_right">
        {this.props.right.map((item, index) => (
          <LinksItem key={index} name={item.name}/>
        ))}
        </div>
        <div className="block_social">
        {this.props.social.map((item, index) => (
          <LinksItem key={index} name={item.name}/>
        ))}
        </div>
      </>

    );
  }
}
