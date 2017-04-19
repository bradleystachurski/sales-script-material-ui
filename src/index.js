import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Layout from './pages/Layout'
import Home from './pages/Home';
import Gatekeeper from './pages/Gatekeeper';
import GatekeeperMain from './components/gatekeeper/GatekeeperMain';
import Gatekeeper1a from './components/gatekeeper/Gatekeeper1a';
import Gatekeeper1b from './components/gatekeeper/Gatekeeper1b';
import Gatekeeper1bi from './components/gatekeeper/Gatekeeper1bi';
import Gatekeeper1c from './components/gatekeeper/Gatekeeper1c';
import './index.css'

injectTapEventPlugin()

const Root = () => (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="/gatekeeper" component={Gatekeeper}>
          <Route path="/gatekeeper/main" component={GatekeeperMain} />
          <Route path="/gatekeeper/1a" component={Gatekeeper1a} />
          <Route path="/gatekeeper/1b" component={Gatekeeper1b} />
          <Route path="/gatekeeper/1bi" component={Gatekeeper1bi} />
          <Route path="/gatekeeper/1bi" component={Gatekeeper1bi} />
          <Route path="/gatekeeper/1c" component={Gatekeeper1c} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
