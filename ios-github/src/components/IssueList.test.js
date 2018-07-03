import React from 'react'
import IssueList from './IssueList'

import renderer from 'react-test-renderer'
import { noErrorsAllowed } from '../common/test-utils'

noErrorsAllowed()

describe('IssueList component', () => {
  it('renders without crashing', () => {
    const issues = []
    const rendered = renderer.create(<IssueList issues={issues} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
