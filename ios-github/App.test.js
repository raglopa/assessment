import React from 'react'
import App from './App'

import renderer from 'react-test-renderer'

describe('Application', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON()
    expect(rendered).toBeTruthy()
  })
})
