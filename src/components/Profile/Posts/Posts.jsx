import React from 'react'
import EachPost from './EachPost/EachPost'
import classes from './Posts.module.css'
import {
  addNewPostActionCreator,
  onTextChangeActionCreator,
} from './../../../redux/profileReducer'

const Posts = (props) => {
  let postItems = props.postData.map((post) => (
    <EachPost
      id={post.id}
      text={post.text}
      likesQuantity={post.likesQuantity}
      dislikesQuantity={post.dislikesQuantity}
    />
  ))

  const newPostTextArea = React.createRef()

  const addNewPost = () => {
    props.dispatch(addNewPostActionCreator())
  }

  const onTextChange = (text) => {
    debugger
    text = newPostTextArea.current.value
    props.dispatch(onTextChangeActionCreator(text))
  }

  return (
    <div className={classes.posts}>
      <h4>What do you think?</h4>
      <textarea
        onChange={onTextChange}
        ref={newPostTextArea}
        value={props.postText}
      ></textarea>
      <div className={classes.add}>
        <button onClick={addNewPost}>Add post</button>
      </div>
      {postItems}
    </div>
  )
}

export default Posts
