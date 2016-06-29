import React from 'react';
import MenuItem from './MenuItem';

const NavMenu = ({ menuItems, onItemClick }) => (
  <ul>
     {
      menuItems.map((item, index) => (
        <MenuItem key={index} id={index} onClick={onItemClick} label={item.label} link={item.link} />
      ))
     }
  </ul>
);

export default NavMenu;
