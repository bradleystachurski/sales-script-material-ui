import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp1b extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> So how has it helped you? (You can turn this more into a conversation at this point, if that's the direction it goes)</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="I haven’t had a chance to read it yet / It was helpful/fine"
            containerElement={<Link to="/followup/2a" />}
            />
          <ListItem
            primaryText="I read you offered to send more information about ________ "
            containerElement={<Link to="/followup/2b" />}
            />
        </List>

      </div>
    )
  }
}

export default FollowUp1b
