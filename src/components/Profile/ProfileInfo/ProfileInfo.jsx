import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.name}>Vasyl Meleshyn</div>
      <div>
        <img
          className={classes.avatar}
          src="https://media.newyorker.com/photos/5a8862150095ae7e55570156/4:3/w_1816,h_1362,c_limit/Mead-Peter-Rabbit.jpg"
          alt="Img"
        ></img>{' '}
      </div>
    </div>
  )
}

export default ProfileInfo
