import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1aiii extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Knowing why you didn’t get good results in Adwords in the past could really help you, because it will tell you what went wrong, and you will be able to use what you learn from us on in your other ad platform. The audit we could do on your old Adwords campaign is 100% free; we’ll simply take a look and send you a detailed report.</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No Thanks"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                primaryText={<span><strong>You:</strong> (Cold & record reason in CRM)</span>}
              />
            ]}
          />
          <ListItem
            primaryText="Sure"
            containerElement={<Link to="/followup/3a" />}
          />
        </List>

      </div>
    )
  }
}

export default DecisionMaker1aiii
