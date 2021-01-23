import React from 'react'
import classes from './../Emails.module.css'
import { NavLink } from 'react-router-dom'

const Person = (props) => {
  let path = '/Emails/' + props.id
  return (
    <div className={classes.person} activeLink={classes.active}>
      <NavLink to={path}>
        {' '}
        <img src={props.photo} alt={props.alt} /> {props.name}
      </NavLink>
    </div>
  )
}
export default Person
