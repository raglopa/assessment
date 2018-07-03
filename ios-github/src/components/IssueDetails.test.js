import React from 'react'
import IssueDetails from './IssueDetails'

import renderer from 'react-test-renderer'
import { noErrorsAllowed } from '../common/test-utils'

noErrorsAllowed()
describe('IssueDetails component', () => {
  it('renders without crashing', () => {
    const issue = { user: {}, labels: [] }
    const rendered = renderer.create(<IssueDetails issue={issue} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
