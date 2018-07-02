import React, { Component } from 'react'
import { View } from 'react-native'
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Thumbnail
} from 'native-base'

import LabelList from './LabelList'

export default class IssueDetails extends Component {
  render() {
    const { issue } = this.props
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>#{issue.number}</Text>
              <Text>{issue.created_at}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{issue.title}</Text>
                <Text>#{issue.number}</Text>
                <Text>{issue.created_at}</Text>
                {issue.user && <Text>user: {issue.user.login}</Text>}
                <Thumbnail square source={{ uri: issue.user.avatar_url }} />
                {issue.labels && <LabelList labels={issue.labels} />}
                <Text>{issue.body}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

// - labels with the correct color
// - description
// 	- only the text part is required
// 	- but fell free to go with markdown rendering, code highlight and images if you like
