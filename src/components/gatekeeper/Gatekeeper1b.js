import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper1b extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Who is this?</p>

        <p><strong>Gatekeeper:</strong> His assistant.</p>

        <p><strong>You:</strong> What's your name?</p>

        <p><strong>Gatekeeper:</strong> (Gatekeeper's Name)</p>

        <List>
          <ListItem
            primaryText={<span><strong>You:</strong> Just tell him it's (your full name), please.</span>}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText={<span><strong>Gatekeeper:</strong> (Puts you through to DM)</span>}
                  containerElement={<Link to="/" />}
                />,
                <ListItem
                  key={2}
                  primaryText={<span><strong>Gatekeeper: </strong> He says he doesn't know you.</span>}
                  containerElement={<Link to="/gatekeeper/1bi" />}
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