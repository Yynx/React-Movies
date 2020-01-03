import React from 'react'
import { NavLink } from 'react-router-dom'

// NavLink is a special version of Link that will add styling attributes to the rendered element when it matches the current URL.
export default function Navbar() {
    return (
        <nav>
          <NavLink to='/' activeClassName='selected' exact>Home</NavLink>
          <NavLink to='/random' activeClassName='selected'>Generate a random movie (no functionality yet)</NavLink>
        </nav>
    )
}
