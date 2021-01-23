import React from 'react'
import './App.css'
import Emails from './components/Emails/Emails'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="main">
          <Route
            path="/Profile"
            render={() => (
              <Profile
                postData={props.state.profilePage.postData}
                postText={props.state.profilePage.postText}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/Emails"
            render={() => (
              <Emails
                store={props.store}
                emailsList={props.state.emailsPage.emailsList}
                emailsMessage={props.state.emailsPage.emailsMessage}
                textAreaValue={props.state.emailsPage.textAreaValue}
              />
            )}
          />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
