import React from 'react';
import './style.css';

export default class Filter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'filter'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form className="form_filter">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="filter">Фильтры</option>
          </select>
      </form>
    );
  }
}
