import React from 'react';
import Menu from './menu.js';
import data from './data.json'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header_logo">
          <img alt="" src='./Photo/logo.png' />
        </div>
        <nav>
    			<div className="topnav" id="myTopnav">
    				{data.names.map((item, index) => (
              <Menu key={index} name={item} />
            ))}
    			</div>
    		</nav>
      </header>
    );
  }
}
