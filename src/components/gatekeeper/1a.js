import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper extends Component {
  render() {
    return (
      <div>

        <div style={{ textAlign: 'center' }}>

          <h2>Getting Past the Gatekeeper</h2>

          <div style={{ textAlign: 'center' }}>

            <p>You: Hello is ________ (owner) in?</p>

            <List>
              <h3>Answers:</h3>
              <ListItem
                primaryText="No I'm sorry he's not in, may I ask who is calling?"
                containerElement={<Link to="/gatekeeper/1a" />}
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


          {this.props.children}

        </div>


      </div>
    )
  }
}

export default Gatekeeper