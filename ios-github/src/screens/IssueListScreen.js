import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'

class IssueListScreen extends Component {
  render() {
    return (
      <View>
        <Text>issue list screen</Text>
        {this.props.issues.map(issue => <Text key={issue.id}>issue.id</Text>)}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  issues: state.issues
})

export default connect(mapStateToProps)(IssueListScreen)
