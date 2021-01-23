import React from 'react'
import classes from './EachPost.module.css'

const EachPost = (props) => {
  return (
    <div className={classes.eachPost}>
      <img
        src="https://media.newyorker.com/photos/5a8862150095ae7e55570156/4:3/w_1816,h_1362,c_limit/Mead-Peter-Rabbit.jpg"
        alt="Person"
      ></img>
      {props.text}
      <div className={classes.likes}>
        <button>Like</button>({props.likesQuantity}) <button>Disike</button>(
        {props.dislikesQuantity})
      </div>
    </div>
  )
}

export default EachPost
