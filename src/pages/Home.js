import React, {
  Component,
  PropTypes,
} from 'react';
import { List, ListItem } from 'material-ui/List'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <List>
          <h2>Please select a script to follow</h2>
          <ListItem
            primaryText="Getting Past the Gatekeeper"
            containerElement={<Link to="/gatekeeper/main" />}
            >
          </ListItem>
          <ListItem
            primaryText="Qualifying Call with Decision Maker"
            containerElement={<Link to="/decisionmaker/main" />}
            >
          </ListItem>
          <ListItem
            primaryText="Follow up Call (setting up Adwords Audit)"
            containerElement={<Link to="/followup/main" />}
            >
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Home;
