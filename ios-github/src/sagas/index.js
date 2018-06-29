import { all } from 'redux-saga/effects'

import data from '../screens/IssueListScreen/saga'

export default function* rootSaga() {
  yield all([data()])
}
