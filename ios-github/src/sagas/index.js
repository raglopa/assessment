import { all } from 'redux-saga/effects'

import data from '../screens/IssueListScreen/saga'
import filter from '../components/IssueFilter/saga'

export default function* rootSaga() {
  yield all([data(), filter()])
}
