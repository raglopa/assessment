import React from 'react'
import { noErrorsAllowed } from '../common/test-utils'
import IssueListItem from './IssueListItem'
import renderer from 'react-test-renderer'

noErrorsAllowed()

describe('IssueListItem component', () => {
  it('renders without crashing', () => {
    const issue = {}
    const rendered = renderer.create(<IssueListItem issue={issue} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
