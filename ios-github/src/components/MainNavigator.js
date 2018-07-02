import React from 'react'
import { createStackNavigator } from 'react-navigation'

import IssueListScreen from '../screens/IssueListScreen'
import IssueDetailsScreen from '../screens/IssueDetailsScreen'
import IssueFilter from '../components/IssueFilter/index'

const MainNavigator = createStackNavigator(
  {
    IssueListScreen: {
      screen: IssueListScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Issues`,
        headerRight: <IssueFilter />
      })
    },
    IssueDetailsScreen: {
      screen: IssueDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Issue #${navigation.state.params.issue.id}`
      })
    }
  },
  {
    initialRouteName: 'IssueListScreen'
  }
)

export default MainNavigator
