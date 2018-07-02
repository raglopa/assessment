import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class IssueDetailsScreen extends Component {
  render() {
    const { navigation } = this.props
    const issue = navigation.getParam('issue', 'NO-ISSUE')
    return (
      <View>
        <Text>issue details screen</Text>
        <Text>{issue.id}</Text>
      </View>
    )
  }
}
