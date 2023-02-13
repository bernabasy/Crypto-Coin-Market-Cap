import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <div>Financial Modeling</div>
    <ul>
      <li>
        <NavLink
          to="/"
        >
          homepage
        </NavLink>
      </li>
      <li>
        <NavLink to="/details">
          Details
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
