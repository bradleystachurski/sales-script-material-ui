import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp3b extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Let me tell you what you get from an audit. We simply take a look at your Adwords account and come back to you with a 1-4 page summary of what is working well and what needs improvement. Often we discover thousands of dollars in wasted clicks. Sometimes we review a campaign and discover there's little that can be improved, which is great news to you and helpful to see how well your investments are working. Usually we find companies who are wasting thousands of dollars. Either way, it’s a very helpful report. All we need is permission to view your Adwords account, and nothing else. If you book today we also waive the fee. What do you say?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/followup/3a" />}
            />
          <ListItem
            primaryText="No"
            containerElement={<Link to="/followup/3c" />}
            />
        </List>

      </div>
    )
  }
}

export default FollowUp3b
