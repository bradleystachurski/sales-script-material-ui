import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp2aiv extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> That’s great. It’s unusual to find a business owner who is knowledgeable and has the time to invest. You know 53% of companies don’t properly use conversion tracking...and of those who don’t track conversions, 97 out of 100 lose money and have to end their campaign. Are you using conversion tracking?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="Yes"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText={<span><strong>You:</strong> Wow, you know a lot compared to other businesses we work with.</span>}
                  containerElement={<Link to="/followup/2aiii" />}
                />
            ]}
            />
          <ListItem
            primaryText="No"
            containerElement={<Link to="/followup/2av" />}
            />
        </List>

      </div>
    )
  }
}

export default FollowUp2aiv
