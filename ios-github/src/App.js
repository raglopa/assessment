import React from 'react'
import MainNavigator from './components/MainNavigator'
import { Provider } from 'react-redux'

import store from './store'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}
