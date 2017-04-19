import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper1bi extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> You told him it's (your full name), right?</p>

        <p><strong>Gatekeeper:</strong> Yes.</p>

        <List>
          <ListItem
            primaryText={<span><strong>You:</strong> Okay, tell him I'm with Beeline, that should help.</span>}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText={<span><strong>Gatekeeper:</strong> (Puts you through)</span>}
                  containerElement={<Link to="/" />}
                />,
                <ListItem
                  key={2}
                  primaryText={<span><strong>Gatekeeper: </strong> I'm sorry, he doesn't know Beeline, what's this in reference to?</span>}
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={1}
                      primaryText={<span><strong>You:</strong> You told him (your full name) from Beeline? Hmm. Tell him this is in reference to his Adwords account, that should jog his memory.</span>}
                      containerElement={<Link to="/" />}
                    />
                  ]}
                />
              ]}
            >
          </ListItem>
        </List>


      </div>
    )
  }
}

export default Gatekeeper1bi