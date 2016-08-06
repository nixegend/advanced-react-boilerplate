/* @flow */

import React from 'react';
import NavMenuBox from '../components/nav-menu/NavMenuBox';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Base = (props: Object): Object => (
  <div className='wrapper'>
    <NavMenuBox />
    <Header />
    <section>{props.children}</section>
    <Footer />
  </div>
);

export default Base;
