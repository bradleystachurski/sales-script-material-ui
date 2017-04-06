import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import Home from './components/Home'
import About from './components/About'
import Gatekeeper from './components/Gatekeeper'
import './index.css'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="gatekeeper" component={Gatekeeper} />
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
