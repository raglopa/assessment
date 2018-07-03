import React from 'react'
import { TouchableHighlight, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import IssueListItem from './IssueListItem'

const IssueList = ({ issues, onIssueSelect }) => (
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

IssueList.propTypes = {
  issues: PropTypes.array.isRequired,
  onIssueSelect: PropTypes.func
}

export default IssueList
