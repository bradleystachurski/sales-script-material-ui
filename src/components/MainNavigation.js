import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { List, ListItem } from 'material-ui/List'

class MainNavigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <AppBar
          title="Scripts App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
          />

        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
          >
          <AppBar title="Scripts App" onLeftIconButtonTouchTap={this.toggleDrawer} />
          <MenuItem primaryText="Home" containerElement={<Link to="/" />} />
        </Drawer>

      </div>
    )
  }
}

export default MainNavigation
