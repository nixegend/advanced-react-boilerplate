import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome !'
    };
  }

  changeTitle(title) {
    console.log('sfdf');
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
