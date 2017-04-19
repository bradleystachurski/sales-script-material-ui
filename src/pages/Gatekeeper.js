import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper extends Component {
  render() {
    return (
      <div>

        <div style={{ textAlign: 'center' }}>

          <h2>Getting Past the Gatekeeper</h2>

          {this.props.children}

        </div>


      </div>
    )
  }
}

export default Gatekeeper

