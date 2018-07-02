import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Content, Text } from 'native-base'

import { updateIssuesRequested } from './actions'
import IssueList from '../../components/IssueList'

class IssueListScreen extends Component {
  updateIssues = () => {
    console.log('updateIssues')
    this.props.updateIssues({ state: this.props.statusFilter })
  }

  componentDidMount = () => {
    this.updateIssues()
  }

  handleIssueSelect = issue => {
    const { navigation } = this.props
    navigation.navigate('IssueDetailsScreen', { issue })
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.pending && <Text>loading issues...</Text>}
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
