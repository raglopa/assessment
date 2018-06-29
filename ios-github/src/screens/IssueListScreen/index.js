import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

import { updateIssuesRequested } from './actions'

class IssueListScreen extends Component {
  updateIssues = () => {
    console.log('updateIssues')
    this.props.updateIssues()
  }
  render() {
    return (
      <View>
        <Text>issue list screen</Text>
        <Button onPress={this.updateIssues} title="refresh" />
        {this.props.pending && <Text>loading issues...</Text>}
        {this.props.failed && <Text>something went wrong...</Text>}
        {this.props.issues.map(issue => <Text key={issue.id}>{issue.id}</Text>)}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  issues: state.data.issues,
  pending: state.data.requestState.pending,
  failed: state.data.requestState.failed
})

const mapDispatchToProps = dispatch => ({
  updateIssues: () => dispatch(updateIssuesRequested())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueListScreen)
