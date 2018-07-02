import React, { Component } from 'react'
import { TouchableHighlight } from 'react-native'
import { Container, Content } from 'native-base'

import IssueListItem from './IssueListItem'

export default class IssueList extends Component {
  render() {
    const { issues, onIssueSelect } = this.props

    return (
      <Container>
        <Content>
          {issues.map(issue => (
            <TouchableHighlight
              onPress={() => onIssueSelect(issue)}
              key={issue.id}
            >
              <IssueListItem issue={issue} />
            </TouchableHighlight>
          ))}
        </Content>
      </Container>
    )
  }
}
