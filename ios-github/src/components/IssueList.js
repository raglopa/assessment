import React, { Component } from 'react'
import { TouchableHighlight, FlatList, Text } from 'react-native'

import IssueListItem from './IssueListItem'

export default class IssueList extends Component {
  render() {
    const { issues, onIssueSelect } = this.props

    return (
      <FlatList
        data={issues}
        keyExtractor={issue => '' + issue.id}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => onIssueSelect(item)}>
            <IssueListItem issue={item} />
          </TouchableHighlight>
        )}
      />
    )
  }
}
