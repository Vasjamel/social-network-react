import React from 'react'
import classes from './News.module.css'

const News = () => {
  return (
    <div className={classes.news}>
      <div className={classes.new}>
        <h3>News 1</h3>
        <img
          src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"
          alt="New"
        />
        <p>some news text</p>
      </div>
      <div className={classes.new}>
        <h3>News 2</h3>
        <img
          src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"
          alt="New"
        ></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
          voluptates, tenetur quam unde, vel reiciendis voluptate rem sint
          perspiciatis quisquam molestiae quod eum aspernatur maxime quidem
          dicta minima quo temporibus adipisci. Vero quaerat quos consequatur
          eius nisi architecto quo. Reprehenderit quibusdam obcaecati hic
          mollitia sit! Laboriosam quisquam consequuntur doloremque.
        </p>
      </div>
      <div className={classes.new}>
        <h3>News 3</h3>
        <p>some news text</p>
      </div>
    </div>
  )
}

export default News
