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

        <p><strong>You:</strong> Hi ________ (owner name), it's ________ (your name). We had set up a call now. I assume you received the (course/competitor report)?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No"
            containerElement={<Link to="/followup/1a" />}
          />
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/followup/1b" />}
          />
        </List>

      </div>
    )
  }
}

export default DecisionMakerMain

