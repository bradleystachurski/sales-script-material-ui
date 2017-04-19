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

import FollowUp from './pages/FollowUp'
import FollowUpMain from './components/followup/FollowUpMain'
import FollowUp1a from './components/followup/FollowUp1a'
import FollowUp1b from './components/followup/FollowUp1b'
import FollowUp2a from './components/followup/FollowUp2a'
import FollowUp2ai from './components/followup/FollowUp2ai'
import FollowUp2aii from './components/followup/FollowUp2aii'
import FollowUp2aiii from './components/followup/FollowUp2aiii'
import FollowUp2aiv from './components/followup/FollowUp2aiv'
import FollowUp2av from './components/followup/FollowUp2av'
import FollowUp2b from './components/followup/FollowUp2b'
import FollowUp3a from './components/followup/FollowUp3a'
import FollowUp3b from './components/followup/FollowUp3b'
import FollowUp3c from './components/followup/FollowUp3c'

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
        <Route path="/followup" component={FollowUp}>
          <Route path="/followup/main" component={FollowUpMain} />
          <Route path="/followup/1a" component={FollowUp1a} />
          <Route path="/followup/1b" component={FollowUp1b} />
          <Route path="/followup/2a" component={FollowUp2a} />
          <Route path="/followup/2ai" component={FollowUp2ai} />
          <Route path="/followup/2aii" component={FollowUp2aii} />
          <Route path="/followup/2aiii" component={FollowUp2aiii} />
          <Route path="/followup/2aiv" component={FollowUp2aiv} />
          <Route path="/followup/2av" component={FollowUp2av} />
          <Route path="/followup/2b" component={FollowUp2b} />
          <Route path="/followup/3a" component={FollowUp3a} />
          <Route path="/followup/3b" component={FollowUp3b} />
          <Route path="/followup/3c" component={FollowUp3c} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
