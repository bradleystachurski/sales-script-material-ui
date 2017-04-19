import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1aii extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Oh ok great. I’m sure you would be interested if we could show you ways to improve the results you got from Adwords for free?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No"
            containerElement={<Link to="/decisionmaker/1aiii" />}
          />
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/followup/3a" />}
          />
        </List>

      </div>
    )
  }
}

export default DecisionMaker1aii
