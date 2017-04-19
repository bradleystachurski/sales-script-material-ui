import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper1b extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> We had a call scheduled today.</p>

        <List>
          <h3>Answers</h3>
          <ListItem
            primaryText={<span><strong>Gatekeeper:</strong> (Puts you through)</span>}
          >
          </ListItem>
          <ListItem
            primaryText={<span><strong>Gatekeeper:</strong> He doesn't remember the call.</span>}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText={<span><strong>You:</strong> Tell him this is in regard to the email he asked me to send him on (date). That should jog his memory.</span>}
                  containerElement={<Link to="/" />}
                />
              ]}
            >
          </ListItem>
        </List>


      </div>
    )
  }
}

export default Gatekeeper1b