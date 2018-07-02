import { put, takeLatest, select } from 'redux-saga/effects'
import { ISSUE_STATUS_FILTER_CHANGED } from './action-types'
import { updateIssuesRequested } from '../../screens/IssueListScreen/actions'

function* handleFilterChange() {
  const statusFilter = yield select(state => state.filter.statusFilter)
  yield put(updateIssuesRequested({ state: statusFilter }))
}

export default function* saga() {
  yield takeLatest(ISSUE_STATUS_FILTER_CHANGED, handleFilterChange)
}
