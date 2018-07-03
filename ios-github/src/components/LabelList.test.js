import React from 'react'
import { noErrorsAllowed } from '../common/test-utils'
import LabelList from './LabelList'
import renderer from 'react-test-renderer'

noErrorsAllowed()

describe('LabelList component', () => {
  it('renders without crashing', () => {
    const labels = []
    const rendered = renderer.create(<LabelList labels={labels} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
