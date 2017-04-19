import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMakerMain extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open
    })
  }

  render() {
    return (
      <div>

        <p><strong>You:</strong> This is (your name) from Beeline. Are you familiar with us?</p>

        <p><strong>Owner:</strong> (pause for answer, most likely “no”)</p>

        <p><strong>You:</strong> Oh, no problem. The reason for my call is because I've seen your ads in Google Adwords in the past. Are you still using Adwords?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No"
            containerElement={<Link to="/decisionmaker/1a" />}
          />
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/decisionmaker/1b" />}
          />
        </List>

      </div>
    )
  }
}

export default DecisionMakerMain

