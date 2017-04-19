import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css'

import Layout from './pages/Layout'
import Home from './pages/Home';

import Gatekeeper from './pages/Gatekeeper';
import GatekeeperMain from './components/gatekeeper/GatekeeperMain';
import Gatekeeper1a from './components/gatekeeper/Gatekeeper1a';
import Gatekeeper1b from './components/gatekeeper/Gatekeeper1b';
import Gatekeeper1bi from './components/gatekeeper/Gatekeeper1bi';
import Gatekeeper1c from './components/gatekeeper/Gatekeeper1c';

import DecisionMaker from './pages/DecisionMaker'
import DecisionMakerMain from './components/decisionmaker/DecisionMakerMain'
import DecisionMaker1a from './components/decisionmaker/DecisionMaker1a'
import DecisionMaker1ai from './components/decisionmaker/DecisionMaker1ai'
import DecisionMaker1aii from './components/decisionmaker/DecisionMaker1aii'
import DecisionMaker1aiii from './components/decisionmaker/DecisionMaker1aiii'
import DecisionMaker1b from './components/decisionmaker/DecisionMaker1b'
import DecisionMaker1bi from './components/decisionmaker/DecisionMaker1bi'
import DecisionMaker1bii from './components/decisionmaker/DecisionMaker1bii'
import DecisionMaker1biii from './components/decisionmaker/DecisionMaker1biii'
import DecisionMaker1biv from './components/decisionmaker/DecisionMaker1biv'
import DecisionMaker2a from './components/decisionmaker/DecisionMaker2a'
import DecisionMaker2ai from './components/decisionmaker/DecisionMaker2ai'
import DecisionMaker2b from './components/decisionmaker/DecisionMaker2b'

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
        <Route path="/decisionmaker" component={DecisionMaker}>
          <Route path="/decisionmaker/main" component={DecisionMakerMain} />
          <Route path="/decisionmaker/1a" component={DecisionMaker1a} />
          <Route path="/decisionmaker/1ai" component={DecisionMaker1ai} />
          <Route path="/decisionmaker/1aii" component={DecisionMaker1aii} />
          <Route path="/decisionmaker/1aiii" component={DecisionMaker1aiii} />
          <Route path="/decisionmaker/1b" component={DecisionMaker1b} />
          <Route path="/decisionmaker/1bi" component={DecisionMaker1bi} />
          <Route path="/decisionmaker/1bii" component={DecisionMaker1bii} />
          <Route path="/decisionmaker/1biii" component={DecisionMaker1biii} />
          <Route path="/decisionmaker/1biv" component={DecisionMaker1biv} />
          <Route path="/decisionmaker/2a" component={DecisionMaker2a} />
          <Route path="/decisionmaker/2ai" component={DecisionMaker2ai} />
          <Route path="/decisionmaker/2b" component={DecisionMaker2b} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
