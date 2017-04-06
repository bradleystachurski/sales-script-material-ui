import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'
import MainNavigation from './components/MainNavigation'
import MainScriptList from './components/MainScriptList'

class App extends Component {

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

        <MainNavigation />
        <MainScriptList />

      </div>
    )
  }
}

export default App
