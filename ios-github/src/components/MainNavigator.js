import React from 'react'
import { createStackNavigator } from 'react-navigation'

import IssueListScreen from '../screens/IssueListScreen'
import IssueDetailsScreen from '../screens/IssueDetailsScreen'

const MainNavigator = createStackNavigator(
  {
    IssueListScreen: IssueListScreen,
    IssueDetailsScreen: IssueDetailsScreen
  },
  {
    initialRouteName: 'IssueListScreen'
  }
)

export default MainNavigator
