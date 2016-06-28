import React from 'react';
import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import About from './About';

describe('<About />', () => {
  jsdom();

  const wrapper = shallow(<About />);
  it('About renders as a <div>', (done) => {
    expect(wrapper.type()).to.eql('div');
    done();
  });

  it('About has class .about', (done) => {
    expect(shallow(<About />).is('.about')).to.equal(true);
    done();
  });

  it('About contains h2 length == 1', (done) => {
    expect(mount(<About />).find('.about').length).to.equal(1);
    done();
  });
});
