import React from 'react'
import { noErrorsAllowed } from '../common/test-utils'
import LabelListItem from './LabelListItem'
import renderer from 'react-test-renderer'

noErrorsAllowed()

describe('LabelListItem component', () => {
  it('renders without crashing', () => {
    const label = { color: '#000' }
    const rendered = renderer.create(<LabelListItem label={label} />).toJSON()
    expect(rendered).toBeTruthy()
  })
  it('uses default color if missing', () => {
    const label = {}
    const rendered = renderer.create(<LabelListItem label={label} />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
