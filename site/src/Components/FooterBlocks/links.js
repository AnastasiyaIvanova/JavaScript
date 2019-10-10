import React from 'react';
import LinksItem from './links.js';

export default class Links extends React.Component {
  render() {
    return (
      <>
        <div class="block_links_left">
          {this.props.left.map((index, item) => (
            <LinksItem id={index} name={item.name}/>
          ))}
        </div>
        <div class="block_links_right">
        {this.props.right.map((index, item) => (
          <LinksItem id={index} name={item.name}/>
        ))}
        </div>
        <div class="block_social">
        {this.props.social.map((index, item) => (
          <LinksItem id={index} name={item.name}/>
        ))}
        </div>
      </>

    );
  }
}
