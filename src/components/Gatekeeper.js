import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'
import MainNavigation from './MainNavigation'

class Gatekeeper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>

        <MainNavigation />

        <div style={{ textAlign: 'center' }}>

          <h2>Getting Past the Gatekeeper</h2>
          <p>You: Hello is ________ (owner) in?</p>

          <List>
            <h3>Answers:</h3>
            <ListItem
              primaryText="No I'm sorry he's not in, may I ask who is calling?"
              containerElement={<Link to="/gatekeeper" />}
              >
            </ListItem>
            <ListItem
              primaryText="Qualifying Call with Decision Maker"
              containerElement={<Link to="/qualifying" />}
              >
            </ListItem>
            <ListItem
              primaryText="Follow up Call (setting up Adwords Audit)"
              containerElement={<Link to="/followup" />}
              >
            </ListItem>
          </List>

        </div>


      </div>
    )
  }
}

export default Gatekeeper

