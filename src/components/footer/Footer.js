import React, { Component } from 'react';
import { default as FooterScss } from './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={FooterScss.footer}>
        <h4>Footer</h4>
      </footer>
    );
  }
}

export default Footer;
