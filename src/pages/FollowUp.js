import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp extends Component {
  render() {
    return (
      <div>

        <div style={{ textAlign: 'center' }}>

          <h2>Follow up Call (setting up Adwords audit)</h2>

          <h3>Important Objectives</h3>

          <ul>
            <li><em>Get feedback on email course or competitor from prospect, remind them of value that we provided</em></li>
            <li><em>Set up appointment for a free Adwords audit to get custom suggestions on how to improve their Adwords campaign (reduce losses, take opportunities)</em></li>
          </ul>

          <hr/>

          {this.props.children}

        </div>

      </div>
    )
  }
}

export default FollowUp

