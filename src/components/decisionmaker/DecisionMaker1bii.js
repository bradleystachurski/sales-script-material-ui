import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1bii extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Are you improving your Adwords account each month yourself, or is a company doing that for you?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="Improving it myself/ourselves"
            containerElement={<Link to="/decisionmaker/1biii" />}
          />
          <ListItem
            primaryText="We have a company doing that for us"
            containerElement={<Link to="/decisionmaker/1biv" />}
          />
        </List>

     </div>
    )
  }
}

export default DecisionMaker1bii
