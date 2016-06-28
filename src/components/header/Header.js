require('./header.scss');
import React, { Component } from 'react';

class Header extends Component {
  loginBtnHandler() {
    require.ensure([], (require) => {
      const login = require('../Login');
      login();
    });
  }

  render() {
    return (
      <header>
        <h1>Header</h1>
        <button type='button' onClick={this.loginBtnHandler} >Login</button>
      </header>
    );
  }
}

export default Header;
