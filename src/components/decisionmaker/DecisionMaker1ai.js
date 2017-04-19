import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker1ai extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> You have no budget for advertising? Or you will do it again later this year?</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText="No budget for it"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText="(Thank them, change Status to Cold and put reason as No Budget)"
                  containerElement={<Link to="/" />}
                />
            ]}
          />
          <ListItem
            primaryText="Will advertise again (later in the year)"
            containerElement={<Link to="/decisionmaker/1b" />}
          />
        </List>

      </div>
    )
  }
}

export default DecisionMaker1ai

