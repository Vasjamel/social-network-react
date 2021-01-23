const ADD_POST = 'ADD-POST'
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA'

let initialState = {
  postData: [
    {
      id: 1,
      text: 'Hello, how are you?',
      likesQuantity: 3,
      dislikesQuantity: 0,
    },
    { id: 2, text: 'Welcome', likesQuantity: 7, dislikesQuantity: 2 },
  ],
  postText: 'put here some post',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postData.length,
        text: state.postText,
        likesQuantity: 0,
        dislikesQuantity: 0,
      }
      state.postData.push(newPost)
      state.postText = ''
      return state

    case CHANGE_TEXT_AREA:
      state.postText = action.text
      return state

    default:
      return state
  }
}

export const addNewPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}

export const onTextChangeActionCreator = (text) => {
  return {
    type: CHANGE_TEXT_AREA,
    text: text,
  }
}

export default profileReducer
