import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { issueStatusFilterChanged } from './actions'
import { updateIssuesRequested } from '../../screens/IssueListScreen/actions'

class IssueFilter extends Component {
  handleFilterChange = () => {
    this.props.switch()
  }
  render() {
    return (
      <Button
        onPress={this.handleFilterChange}
        title={`Only ${this.props.statusFilter === 'open' ? 'closed' : 'open'}`}
      />
    )
  }
}

const mapStateToProps = state => ({
  statusFilter: state.filter.statusFilter
})

const mapDispatchToProps = dispatch => ({
  switch: () => dispatch(issueStatusFilterChanged()),
  updateIssues: payload => dispatch(updateIssuesRequested(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueFilter)
