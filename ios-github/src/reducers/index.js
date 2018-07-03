import { combineReducers } from 'redux'
import data from '../screens/IssueListScreen/reducer'
import filter from '../components/IssueFilter/reducer'
import settings from './settingsReducer'

export default combineReducers({
  data,
  filter,
  settings
})
