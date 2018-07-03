import { select, call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../common/api'
import { UPDATE_ISSUES_REQUESTED } from './action-types'
import { updateIssuesFailed, updateIssuesSucceeded } from './actions'

function* fetchData({ payload }) {
  try {
    const { state } = payload
    const repo = yield select(state => state.settings.repo)
    const issues = yield call(Api.fetchIssues, { state, repo })
    yield put(updateIssuesSucceeded({ issues }))
  } catch (error) {
    console.log('fetchData', error)
    yield put(updateIssuesFailed())
  }
}

export default function* saga() {
  yield takeLatest(UPDATE_ISSUES_REQUESTED, fetchData)
}
