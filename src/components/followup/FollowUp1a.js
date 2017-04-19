import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp1a extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> I have your email address as ________. I’ll resend it. Should I check back same time tomorrow?</p>

        <p><strong>Owner:</strong> Y/N (they will confirm email & time)</p>

        <p><strong>You:</strong> (schedule follow up)</p>

      </div>
    )
  }
}

export default FollowUp1a

