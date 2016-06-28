import React, { Component } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
