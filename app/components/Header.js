import React, { Component } from 'react';
import Title from './Header/Title';

export default class Header extends Component {
  handleChange(e) {
    this.props.title = e.target.value;
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange} />
      </div>
    );
  }
}
