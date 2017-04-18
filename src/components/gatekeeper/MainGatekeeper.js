import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class MainGatekeeper extends Component {
  render() {
    return (
      <div>

        <div style={{ textAlign: 'center' }}>

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

export default MainGatekeeper

