import React from 'react';
import './style.css';

export default class Search extends React.Component{
  constructor() {
    super();
    this.state = {search : ''};
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  render() {
    return (
      <form className="form_search" action="#" name="newform" method="post">
          <span class="icon"><i class="fa fa-search"></i></span>
          <input type="text" name = "search" placeholder="Поиск блюд и ресторанов" value={this.state.search} onChange={this.handleChange} />
      </form>
    );
  }
}
