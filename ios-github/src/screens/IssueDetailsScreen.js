import React from 'react'
import IssueDetails from '../components/IssueDetails'

const IssueDetailsScreen = ({ navigation }) => {
  const issue = navigation.getParam('issue', 'NO-ISSUE')
  return <IssueDetails issue={issue} />
}

export default IssueDetailsScreen
