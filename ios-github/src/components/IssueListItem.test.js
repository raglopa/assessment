import React from 'react'
import { noErrorsAllowed } from '../common/test-utils'
import IssueListItem from './IssueListItem'
import renderer from 'react-test-renderer'

noErrorsAllowed()

describe('IssueListItem component', () => {
  it('renders without crashing', () => {
    const issue = { user: {}, created_at: '2018-07-03' }
    const rendered = renderer.create(<IssueListItem issue={issue} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
