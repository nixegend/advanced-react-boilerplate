import React from 'react';
import { connect } from 'react-redux';

const mapstatetoprops = (state, ownprops) => ({
  routing: ownprops.params.id
});

const notfound = (routing) => (
  <div>
    <h2>Page not found !</h2>
    {routing.location.pathname}
  </div>
);

const notfoundbox = connect(
  mapstatetoprops
)(notfound);

export default notfoundbox;
