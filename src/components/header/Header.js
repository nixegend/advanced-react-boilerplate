import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
  loginBtnHandler() {
    require.ensure([], (require) => {
      const login = require('../Login');
      login();
    });
  }

  render() {
    return (
      <header className={styles.header}>
        <button type='button'
          className={styles['button-md']}
          onClick={this.loginBtnHandler}
        >Login</button>
        <h4>Header</h4>
      </header>
    );
  }
}

export default Header;
