import { combineReducers } from 'redux'
import data from '../screens/IssueListScreen/reducer'
import filter from '../components/IssueFilter/reducer'

export default combineReducers({
  data,
  filter
})
