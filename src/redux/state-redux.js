import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer'
import emailsReducer from './emailsReducer'
import menuReducer from './menuReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  emailsPage: emailsReducer,
  navigationPage: menuReducer,
})

let store = createStore(reducers)

export default store
