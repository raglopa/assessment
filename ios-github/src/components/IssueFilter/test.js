import React from 'react'
import { noErrorsAllowed } from '../../common/test-utils'
import IssueFilter from './'
import renderer from 'react-test-renderer'

noErrorsAllowed()

describe('IssueFilter component', () => {
  it.skip('renders without crashing', () => {
    //TODO: test connected components
    const rendered = renderer.create(<IssueFilter />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
