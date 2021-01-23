import React from 'react'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Posts
        postData={props.postData}
        postText={props.postText}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile
