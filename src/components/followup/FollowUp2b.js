import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp2b extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Sure, we would be happy to email that to you. In the meantime, why don’t we review your current Adwords campaign, and and send you a custom report on how to improve it? We often discover thousands of dollars in wasted clicks or lost opportunities. Normally we charge $300 for an audit, but if you schedule it now we will waive that fee. Would you like to schedule that now?</p>

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

export default FollowUp2b
