import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/Profile" activeClassName={classes.activeLink}>
          My Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/Emails" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/News" activeClassName={classes.activeLink}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/Music" activeClassName={classes.activeLink}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/Settings" activeClassName={classes.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation
