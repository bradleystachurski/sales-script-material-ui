import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp2aii extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Oh, did you review it yourself?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No (it was done by so and so)."
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText={<span><strong>You:</strong> And is (name of that person/company) improving the campaign every month?</span>}
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={1}
                      primaryText="Yes/No"
                      containerElement={<Link to="/followup/2aiii" />}
                    />
                  ]}
                />
            ]}
            />
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/followup/2aiv" />}
            />
        </List>

      </div>
    )
  }
}

export default FollowUp2aii
