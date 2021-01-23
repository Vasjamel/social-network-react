const CHANGE_MESSAGE_AREA = 'CHANGE-MESSAGE-AREA'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  textAreaValue: '',
  emailsList: [
    {
      id: 1,
      name: 'Andriy',
      photo: 'https://miro.medium.com/max/2048/1*eZFtYZASoJzJUi2ZoUBIDQ.jpeg',
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
}

const emailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_AREA:
      state.textAreaValue = action.text
      return state

    case SEND_MESSAGE:
      let messageText = state.textAreaValue
      state.emailsMessage.push({
        id: state.emailsMessage.length,
        text: messageText,
      })
      state.textAreaValue = ''
      return state

    default:
      return state
  }
}

export const onEmailChangeCreator = (text) => {
  return {
    type: CHANGE_MESSAGE_AREA,
    text: text,
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}

export default emailsReducer
