import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../common/api'
import { UPDATE_ISSUES_REQUESTED } from './action-types'
import { updateIssuesFailed, updateIssuesSucceeded } from './actions'

function* fetchData({ payload }) {
  try {
    const { state } = payload
    const issues = yield call(Api.fetchIssues, state)
    yield put(updateIssuesSucceeded({ issues }))
  } catch (error) {
    yield put(updateIssuesFailed())
  }
}

export default function* saga() {
  yield takeLatest(UPDATE_ISSUES_REQUESTED, fetchData)
}
