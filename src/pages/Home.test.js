import React from 'react';
import jsdom from 'mocha-jsdom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Home from './Home';

describe('<Home />', () => {
  jsdom();

  const wrapper = shallow(<Home />);
  it('Home renders as a <div>', (done) => {
    expect(wrapper.type()).to.eql('div');
    done();
  });

  it('Home has class .home', (done) => {
    expect(shallow(<Home />).is('.home')).to.equal(true);
    done();
  });

  it('Home contains h2 length == 1', (done) => {
    expect(mount(<Home />).find('.home').length).to.equal(1);
    done();
  });
});
