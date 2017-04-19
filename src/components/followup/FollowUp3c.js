import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class FollowUp3c extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> Do you have any major concerns about the audit?</p>

        <p><strong>Owner:</strong> (They will tell you why)</p>

        <ul>
          <li>If the concern is over sharing their information, remind them that we will only request view access</li>
          <li>If they say they are happy with their current marketing company, tell them that no matter who they work with, a good company should be happy to get an outside audit - it will only prove to you that they are top notch, or not)</li>
          <li>You can also ask them why they wanted the email course/competitor report, and find out what interested them in that, but not in a review with custom suggestions to directly help them</li>
          <li>If they put up a real wall, then mark as Cold and make a note of the call in CRM</li>
        </ul>

      </div>
    )
  }
}

export default FollowUp3c
