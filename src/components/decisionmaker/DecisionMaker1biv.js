import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1biv extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> If an outside company is doing this for you, then the free email course will give you the questions to ask to make sure you are getting the best results possible. Are you the right person to send it to?</p>

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

export default DecisionMaker1biv
