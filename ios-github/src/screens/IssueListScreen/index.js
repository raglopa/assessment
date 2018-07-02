import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Container, Content, Text } from 'native-base'
import { connect } from 'react-redux'

import { updateIssuesRequested } from './actions'
import IssueList from '../../components/IssueList'

class IssueListScreen extends Component {
  componentDidMount = () => {
    this.props.updateIssues({ state: this.props.statusFilter })
  }

  handleIssueSelect = issue => {
    const { navigation } = this.props
    navigation.navigate('IssueDetailsScreen', { issue })
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.pending && (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
          {this.props.failed && <Text>something went wrong...</Text>}
          {this.props.success && (
            <IssueList
              issues={this.props.issues}
              onIssueSelect={this.handleIssueSelect}
            />
          )}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  issues: state.data.issues,
  pending: state.data.requestState.pending,
  failed: state.data.requestState.failed,
  success: state.data.requestState.success,
  statusFilter: state.filter.statusFilter
})

const mapDispatchToProps = dispatch => ({
  updateIssues: payload => dispatch(updateIssuesRequested(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueListScreen)
