import React from 'react';
import { Link, IndexLink } from 'react-router';

const MenuItem = ({ id, label, link, onClick }) => ((id === 0) ?
  (
  <li>
    <IndexLink to={link} onClick={() => { onClick(id); }} activeStyle={{ textDecoration: 'underline' }}>
      {label}
    </IndexLink>
  </li>
  )
  :
  (
  <li>
    <Link to={link} onClick={() => onClick(id)} activeStyle={{ textDecoration: 'underline' }}>
      {label}
    </Link>
  </li>
  )
);

export default MenuItem;
