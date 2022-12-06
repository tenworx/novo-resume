import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MyDocuments from './views/my-documents'
import Home from './views/home'
import Pricing from './views/pricing'
import MyProfile from './views/my-profile'
import ResumeTemplates from './views/resume-templates'
import Login from './views/login'
import DocumentCoverLetters from './views/document-cover-letters'
import CoverLetters from './views/cover-letters'
import Register from './views/register'
import CVTemplates from './views/c-v-templates'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MyDocuments} exact path="/my-documents" />
        <Route component={Home} exact path="/" />
        <Route component={Pricing} exact path="/pricing" />
        <Route component={MyProfile} exact path="/my-profile" />
        <Route component={ResumeTemplates} exact path="/resume-templates" />
        <Route component={Login} exact path="/login" />
        <Route
          component={DocumentCoverLetters}
          exact
          path="/document-cover-letters"
        />
        <Route component={CoverLetters} exact path="/cover-letters" />
        <Route component={Register} exact path="/register" />
        <Route component={CVTemplates} exact path="/c-v-templates" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
