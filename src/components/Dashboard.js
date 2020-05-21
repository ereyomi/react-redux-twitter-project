import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <h3 className="center">Your Tweet Timeline</h3>
        <ul className="dashboard-list">
        {
            this.props.tweetsids.map((id) => (
            <li key={id}>
                <Tweet id={id}/>
            </li>
            ))
        }
        </ul>
      </div>
    )
  }
}
function mapStateToProps ({ tweets }) {
    return {
        tweetsids: Object.keys(tweets)
        .sort((a, b) => tweets[a].timestamps - tweets[b].timestamps)
    }
}   
export default connect(mapStateToProps)(Dashboard);