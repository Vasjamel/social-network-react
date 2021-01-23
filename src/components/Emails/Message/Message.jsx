import React from 'react'
import classes from './../Emails.module.css'

function Message(props) {
  return <div className={classes.eachMessage}>{props.text}</div>
}

export default Message
