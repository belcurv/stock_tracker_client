import * as React  from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <NavLink
      to='/'
      className='header__nav'
      activeClassName='is-active'
      exact={ true }
    >
      Home
    </NavLink>
    <div>
      <NavLink
        to='/about'
        className='header__nav'
        activeClassName='is-active'
      >
      About
      </NavLink>
    </div>
  </header>
);

export default Header;
