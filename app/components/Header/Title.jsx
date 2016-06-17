require('./title.scss');
import React, { Component } from 'react';

export default class Title extends Component {
  loginBtnHandler() {
    require.ensure([], (require) => {
      const login = require('../login');
      login();
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button type='button' onClick={this.loginBtnHandler} >Login</button>
      </div>
    );
  }
}
