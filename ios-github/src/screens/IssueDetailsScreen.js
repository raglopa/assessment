import React, { Component } from 'react'
import IssueDetails from '../components/IssueDetails'
export default class IssueDetailsScreen extends Component {
  render() {
    const { navigation } = this.props
    const issue = navigation.getParam('issue', 'NO-ISSUE')
    return <IssueDetails issue={issue} />
  }
}
