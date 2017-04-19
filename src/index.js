import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Layout from './pages/Layout'
import Home from './pages/Home';
import Gatekeeper from './pages/Gatekeeper';
import MainGatekeeper from './components/gatekeeper/MainGatekeeper';
import Gatekeeper1a from './components/gatekeeper/Gatekeeper1a';
import './index.css'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="gatekeeper" component={MainGatekeeper}>
          <Route path="gatekeeper/1a" component={Gatekeeper1a} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
