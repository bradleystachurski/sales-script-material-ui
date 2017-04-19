import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1bi extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> I just have one important question to identify what we need to send you to improve your campaign. Is it more important to you to know your Adwords campaign is being improved every month, or to stay ahead of your competition?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="Knowing campaign is being improved every month"
            containerElement={<Link to="/decisionmaker/2a" />}
          />
          <ListItem
            primaryText="Stay ahead of the competition"
            containerElement={<Link to="/decisionmaker/2b" />}
          />
        </List>

     </div>
    )
  }
}

export default DecisionMaker1bi
