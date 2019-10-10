import React from 'react';
import Company from './company.js';
import Contacts from './contacts.js';
// import Links from './links.js';

export default class FooterBlocks extends React.Component {
  render() {
    return (
      <div className="footer_wrapper">
        <Company />
        <Contacts />
      </div>
    );
  }
}

const left=[
  {name:'Projects'},
  {name: 'About'},
  {name: 'Services'},
  {name: 'Career'}
];

const right=[
  {name:'News'},
  {name: 'Events'},
  {name: 'Contact'},
  {name: 'Legals'}
];

const social=[
  {name:'Facebook'},
  {name: 'Twitter'},
  {name: 'Instagram'},
  {name: 'Dribble'}
];
