import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Card, CardItem, Body, Text } from 'native-base'

import LabelList from './LabelList'

const IssueListItem = ({ issue }) => (
  <Card>
    <CardItem header style={styles.header}>
      <Text>#{issue.number}</Text>
      <Text>{issue.created_at}</Text>
    </CardItem>
    <CardItem>
      <Body>
        <Text>{issue.title}</Text>
        {issue.user && <Text>user: {issue.user.login}</Text>}
        {issue.labels && <LabelList labels={issue.labels} />}
      </Body>
    </CardItem>
  </Card>
)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

IssueListItem.propTypes = {
  issue: PropTypes.object.isRequired
}

export default IssueListItem
