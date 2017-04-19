import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1a extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Are you no longer advertising at all, or do you have another channel that you are trying?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No longer advertising at all"
            containerElement={<Link to="/decisionmaker/1ai" />}
          />
          <ListItem
            primaryText="Using a different channel"
            containerElement={<Link to="/decisionmaker/1aii" />}
          />
        </List>

     </div>
    )
  }
}

export default DecisionMaker1a

