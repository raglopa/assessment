import React, { Component } from 'react'

import { View, StyleSheet } from 'react-native'

import { Card, CardItem, Body, Text } from 'native-base'

import LabelList from './LabelList'

export default class IssueListItem extends Component {
  render() {
    const { issue } = this.props
    return (
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
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

// - creation date
// - author login
// - labels with the correct color
