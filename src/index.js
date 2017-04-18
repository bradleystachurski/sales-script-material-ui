import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Layout from './pages/Layout'
import Home from './components/Home';
import Gatekeeper from './components/Gatekeeper';
import MainGatekeeper from './components/gatekeeper/MainGatekeeper';
import './index.css'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="gatekeeper" component={Gatekeeper}>
          <Route path="MainGatekeeper" component={MainGatekeeper} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
