import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import { AlertProvider } from './context/Alert/AlertProvider'
import { GithubProvider } from './context/github/githubProvider'
import Alert from './components/Alert/Alert'

const App = () => (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Navbar />
          <Alert />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </main>
        </Router>
      </AlertProvider>
    </GithubProvider>
)

export default App