import React from 'react'
import classes from './Emails.module.css'
import Person from './Person/Person'
import Message from './Message/Message'
import {
  onEmailChangeCreator,
  sendMessageCreator,
} from '../../redux/emailsReducer'

const Emails = (props) => {
  const emailsFrom = props.emailsList.map((person) => (
    <Person id={person.id} photo={person.photo} name={person.name} />
  ))

  const messagesList = props.emailsMessage.map((mail) => (
    <Message text={mail.text} />
  ))

  let onSendClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onMessageTextChage = (event) => {
    let text = event.target.value
    props.store.dispatch(onEmailChangeCreator(text))
  }

  return (
    <div className={classes.onlyForGrid}>
      <div className={classes.from}>
        <h2>FROM:</h2>
        {emailsFrom}
      </div>
      <div className={classes.messages}>
        <h2>MESSAGE:</h2>
        <div>{messagesList}</div>
      </div>
      <div className={classes.newMessage}>
        <h2>NEW MESSAGE</h2>
        <div className={classes.newMessageText}>
          <textarea
            value={props.textAreaValue}
            onChange={onMessageTextChage}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className={classes.button}>
          <button onClick={onSendClick}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Emails
