import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1b extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Great. I’m sure you would be interested if we could show you ways to improve your Adwords results for free?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/decisionmaker/1bi" />}
          />
          <ListItem
            primaryText="No"
            containerElement={<Link to="/decisionmaker/1bii" />}
          />
        </List>

     </div>
    )
  }
}

export default DecisionMaker1b
