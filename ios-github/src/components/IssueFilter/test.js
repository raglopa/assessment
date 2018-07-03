import React from 'react'
import { noErrorsAllowed } from '../../common/test-utils'
import IssueFilter from './'
import renderer from 'react-test-renderer'

import reducer from './reducer'
import { issueStatusFilterChanged } from './actions'
import { ISSUE_STATUS_FILTER_CHANGED } from './action-types'

noErrorsAllowed()

describe('IssueFilter component', () => {
  it.skip('renders without crashing', () => {
    //TODO: test connected components
    const rendered = renderer.create(<IssueFilter />).toJSON()
    expect(rendered).toBeTruthy()
  })
})

describe("IssueFilter's reducer", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ statusFilter: 'open' })
  })

  it('should handle ISSUE_STATUS_FILTER_CHANGED', () => {
    const openState = { statusFilter: 'open' }
    const closedState = { statusFilter: 'closed' }
    const action = issueStatusFilterChanged()

    expect(reducer(openState, action)).toEqual(closedState)
    expect(reducer(closedState, action)).toEqual(openState)
  })
})
