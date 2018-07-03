import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Thumbnail
} from 'native-base'
import moment from 'moment'

import LabelList from './LabelList'

const IssueDetails = ({ issue }) => {
  const fromNow = moment(issue.created_at).fromNow()
  const cratedAt = moment.utc(issue.created_at).format('YYYY-MM-DD HH:mm:ss')
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header style={styles.cardItem}>
            <Text>{issue.title}</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Thumbnail small square source={{ uri: issue.user.avatar_url }} />
            <Text style={styles.userName}> {issue.user.login} </Text>
            <Text> opened this issue {fromNow}</Text>
          </CardItem>
          <LabelList labels={issue.labels} />
          <CardItem style={styles.cardItem}>
            <Text>Opened: {cratedAt} (UTC)</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text>{issue.body}</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  userName: {
    fontWeight: 'bold'
  }
})

IssueDetails.propTypes = {
  issue: PropTypes.object.isRequired
}

export default IssueDetails
