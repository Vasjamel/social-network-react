import React from 'react'
import classes from './Music.module.css'

const Music = () => {
  return (
    <div className={classes.songs}>
      <div>
        <h3>Song name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          doloribus dignissimos velit.
        </p>
        <audio controls>
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div>
        <h3>Song name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          doloribus dignissimos velit.
        </p>
        <audio controls>
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div>
        <h3>Song name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          doloribus dignissimos velit.
        </p>
        <audio controls>
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
        </audio>
      </div>{' '}
    </div>
  )
}

export default Music
