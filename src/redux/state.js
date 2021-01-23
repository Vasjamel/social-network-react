import emailsReducer from './emailsReducer'
import profileReducer from './profileReducer'

let store = {
  _state: {
    profilePage: {
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
    },

    emailsPage: {
      textAreaValue: '',
      emailsList: [
        {
          id: 1,
          name: 'Andriy',
          photo:
            'https://miro.medium.com/max/2048/1*eZFtYZASoJzJUi2ZoUBIDQ.jpeg',
          message: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'Andriy' },
          ],
        },
        {
          id: 2,
          name: 'Jack',
          photo:
            'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
          message: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'Jack' },
          ],
        },
      ],
      emailsMessage: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Do you speak italian?' },
        { id: 4, text: 'English?' },
        { id: 5, text: 'Ukrainian?' },
        { id: 6, text: 'Mmmm.. Are you russian?' },
        { id: 7, text: 'Oh no..' },
        { id: 8, text: 'Bye' },
      ],
    },
  },
  _callSubscriber() {
    console.log('DOM changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action)
    emailsReducer(this._state.emailsPage, action)

    this._callSubscriber(this._state)
  },
}

export default store
window.store = store
