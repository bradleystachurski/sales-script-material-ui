import React, { Component } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'

class DecisionMaker2b extends Component {
  render() {
    return (
      <div>

        <p><strong>You:</strong> OK great, so we can put together a free competitor report and email it to you, so that you can see exactly what strategies your competitors are using and use them for yourself if you want. I have your email address as _____, is this correct?</p>

        <p><strong>Owner:</strong> Y/N (They will give correct email address)</p>

        <p><strong>You:</strong> And what are the names of 2-3 competitors of yours? We base the competitor report on these competitors of yours.</p>

        <p><strong>Owner:</strong> (Tells you some, or if they don't tell you: “No problem, we can find some local competitors.”)</p>

        <p><strong>You:</strong> Great, I'll send this competitor report. I can call you on (business day that is 3-5 days away) to get your feedback. Is that a good day for you? (Schedule follow up; if they tell you to follow up in a time frame longer than 1 month: What’s the reason this is a good time to reconnect?)</p>

     </div>
    )
  }
}

export default DecisionMaker2b
