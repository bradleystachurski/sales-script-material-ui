import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker2a extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> OK, we’ve put together a free email course to show you what to do to see how your campaign is being improved every month. I have your email address as ________, is this correct?</p>

        <p><strong>Owner:</strong> Y/N (They will give correct email address)</p>

        <p><strong>You:</strong> Great, I'll send this email course to you. I can call you on (business day that is 6-8 days away) to get your feedback (if it helps you). Is that a good day for you?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="Yes"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                primaryText="Most likely they will not be interested still, you can cold and make a note in CRM. However if they are interested now, click here"
                containerElement={<Link to="/" />}
              />
            ]}
          />
          <ListItem
            primaryText="Yes, but I don’t have a marketing manager"
            containerElement={<Link to="/decisionmaker/2ai" />}
          />
        </List>

     </div>
    )
  }
}

export default DecisionMaker2a
