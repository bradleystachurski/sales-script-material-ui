import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1biii extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> If you/your team is improving your own Adwords account, then the free email course is going to be extremely helpful to reduce wasted spend. Are you the right person to send it to?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                primaryText="Ask who the right person is, note in CRM and contact that person"
              />
            ]}
          />
          <ListItem
            primaryText="Yes"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                primaryText="Most likely they will not be interested still, you can cold and make a note in CRM. However if they are interested now, click here"
                containerElement={<Link to="/decisionmaker/2a" />}
              />
            ]}
          />
        </List>

     </div>
    )
  }
}

export default DecisionMaker1biii
