import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker extends Component {
  render() {
    return (
      <div>

        <div style={{ textAlign: 'center' }}>

          <h2>Qualifying Call with Decision Maker</h2>

          <h3>Important Objectives</h3>

          <ul>
            <li><em>Qualify prospect: find out if prospect is advertising, getting results, what’s important to them</em></li>
            <li><em>Offer/send prospect valuable content</em></li>
            <li><em>Schedule follow up</em></li>
          </ul>

          <hr/>

          {this.props.children}

        </div>


      </div>
    )
  }
}

export default DecisionMaker

