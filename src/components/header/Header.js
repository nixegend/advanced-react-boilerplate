import React, { Component } from 'react';
import { default as HeaderScss } from './header.scss';

class Header extends Component {
  loginBtnHandler() {
    require.ensure([], (require) => {
      const login = require('../Login');
      login();
    });
  }

  render() {
    return (
      <header className={HeaderScss.header}>
        <button type='button'
          className={HeaderScss['button-md']}
          onClick={this.loginBtnHandler}
        >Login</button>
        <h4>Header</h4>
      </header>
    );
  }
}

export default Header;
