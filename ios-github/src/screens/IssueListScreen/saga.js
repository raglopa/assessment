import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../common/api'
import { UPDATE_ISSUES_REQUESTED } from './action-types'
import { updateIssuesFailed, updateIssuesSucceeded } from './actions'
import { repeatedRequest } from '../../common/utils'

function* fetchData() {
  try {
    const issues = yield call(repeatedRequest, Api.fetchIssues)
    yield put(updateIssuesSucceeded({ issues }))
  } catch (error) {
    yield put(updateIssuesFailed())
  }
}

export default function* saga() {
  yield takeLatest(UPDATE_ISSUES_REQUESTED, fetchData)
}
