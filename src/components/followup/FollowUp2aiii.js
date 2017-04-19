import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp2aiii extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> As an Adwords consultant working with a lot of companies, we have partners who we ask to review our work and give us an outside perspective. This outside input is very valuable to us, as it helps us see areas of improvement or opportunity that we can’t see from inside. We can audit your Adwords campaign, give you some outside feedback, and tell you how to improve it. Normally we charge $300 for an audit, but if you schedule it now we will waive that fee. Would you like to schedule that now?</p>

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

export default FollowUp2aiii
