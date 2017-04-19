import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp2a extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Oh no problem. There’s one fact in there that you should know about - 72% of Adwords accounts aren’t improved on a monthly basis, or even reviewed. Were you aware of this?</p>

        <p><strong>Owner:</strong> No</p>

        <p><strong>You:</strong> When was the last time your Adwords account was reviewed?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="I think my marketing manager does it every month."
            containerElement={<Link to="/followup/2ai" />}
            />
          <ListItem
            primaryText="(Gives you a recent date)"
            containerElement={<Link to="/followup/2aii" />}
            />
        </List>

      </div>
    )
  }
}

export default FollowUp2a
