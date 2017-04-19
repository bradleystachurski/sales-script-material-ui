import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp2av extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> We can do an audit of your campaign, tell you how to improve it, and quantify how much money you could save using tracking. Normally we charge $300 for an audit, but if you schedule it now we will waive that fee. Would you like to schedule that now?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/followup/3a" />}
            />
          <ListItem
            primaryText="No"
            containerElement={<Link to="/followup/3b" />}
            />
        </List>

      </div>
    )
  }
}

export default FollowUp2av
