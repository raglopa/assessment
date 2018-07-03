import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Card, CardItem, Body, Text } from 'native-base'
import moment from 'moment'

import LabelList from './LabelList'

const IssueListItem = ({ issue }) => {
  const fromNow = moment(issue.created_at).fromNow()
  const cratedAt = moment.utc(issue.created_at).format('YYYY-MM-DD HH:mm:ss')
  return (
    <Card>
      <CardItem header style={styles.header}>
        <Text>
          #{issue.number} ({issue.state})
        </Text>
        <Text>{fromNow}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={styles.title}>{issue.title}</Text>
          <View style={styles.details}>
            <Text style={styles.user}>{issue.user.login}</Text>
            <Text> opened this issue</Text>
          </View>
          <Text>{cratedAt} (UTC)</Text>
          {issue.labels && <LabelList labels={issue.labels} />}
        </Body>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  user: {
    fontWeight: 'bold'
  },
  details: {
    flex: 1,
    flexDirection: 'row'
  }
})

IssueListItem.propTypes = {
  issue: PropTypes.object.isRequired
}

export default IssueListItem
